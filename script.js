const form = document.getElementById("itemForm");
const itemsBox = document.getElementById("items");
const search = document.getElementById("search");
const empty = document.getElementById("empty");

let reports = [];

try {
  reports = JSON.parse(
    localStorage.getItem("campusReports") || "[]"
  );

  if (!Array.isArray(reports)) reports = [];
} catch {
  reports = [];
}

function save() {
  localStorage.setItem("campusReports", JSON.stringify(reports));
}

function render() {
  const query = search.value.toLowerCase().trim();

  const filtered = reports.filter(item =>
    [item.name, item.location, item.category, item.description]
      .some(value => value.toLowerCase().includes(query))
  );

  itemsBox.replaceChildren();
  empty.textContent = filtered.length
    ? ""
    : "No items found. Try another search or report an item.";

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "item";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const tag = document.createElement("span");
    tag.className = "tag" + (item.status === "Found" ? " found" : "");
    tag.textContent = item.status;

    const details = document.createElement("p");
    details.textContent =
      `${item.category} · ${item.location} · ${item.date}`;

    const description = document.createElement("p");
    description.textContent = item.description || "No description provided.";

    card.append(title, tag, details, description);

    // Show a possible match based on shared keywords.
    const matches = reports.filter(other =>
      other.id !== item.id &&
      other.status !== item.status &&
      other.category === item.category &&
      item.name.toLowerCase().split(/\s+/).some(word =>
        word.length > 2 &&
        other.name.toLowerCase().includes(word)
      )
    );

    if (matches.length) {
      const match = document.createElement("p");
      match.textContent = "🔎 Possible match: " +
        matches.map(m => `${m.name} (${m.location})`).join(", ");
      card.append(match);
    }

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "Delete Report";
    del.addEventListener("click", () => {
      reports = reports.filter(r => r.id !== item.id);
      save();
      render();
    });

    card.append(del);
    itemsBox.append(card);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const report = {
    id: Date.now().toString() + Math.random().toString(16).slice(2),
    name: document.getElementById("name").value.trim(),
    status: document.getElementById("status").value,
    category: document.getElementById("category").value,
    location: document.getElementById("location").value.trim(),
    date: document.getElementById("date").value,
    description: document.getElementById("description").value.trim()
  };

  if (!report.name || !report.location || !report.date) return;

  reports.unshift(report);
  save();
  form.reset();
  render();
});

search.addEventListener("input", render);

render();
