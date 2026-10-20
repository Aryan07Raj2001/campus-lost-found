# 🎒 Campus Lost & Found

> Lost something? Find it here!

A simple, lightweight web app where students can report lost or found items on campus and search through the reported items. Built with plain **HTML, CSS and JavaScript** — no frameworks or build tools required.

---

## ✨ Features

- **Report an item** as either *Lost* ("I Lost This") or *Found* ("I Found This")
- Capture useful details for each report:
  - Item name (e.g. Black Wallet)
  - Category: Electronics, Books, Clothing, Accessories, Other
  - Location on campus
  - Date
  - Optional description
- **Browse all reported items** in one place
- **Search** items by name or location
- Clean, simple interface that works in the browser

---

## 🛠 Tech Stack

| Technology | Purpose                     |
| ---------- | --------------------------- |
| HTML5      | Page structure and the form |
| CSS3       | Styling and layout          |
| JavaScript | Form handling, listing, search |

---

## 📂 Project Structure

```
campus-lost-found/
├── index.html   # Page layout: report form, search box and item list
├── style.css    # Styling
├── script.js    # App logic
└── README.md
```

---

## 🚀 Getting Started

No installation is needed.

1. **Clone the repository**

   ```bash
   git clone https://github.com/Aryan07Raj2001/campus-lost-found.git
   cd campus-lost-found
   ```

2. **Open the app**

   Double-click `index.html`, or open it from your browser (File → Open).

   Optionally, serve it locally with any static server, for example:

   ```bash
   # Python
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

---

## 💡 How to Use

1. Fill in the **Report an Item** form and choose whether you *lost* or *found* the item.
2. Click **Submit Report** to add it to the list.
3. Scroll to **Reported Items** to see all reports.
4. Use the **search box** to filter items by name or location.

> **Note:** `<Add a line here about where data is stored, e.g. "Items are saved in your browser's localStorage, so they stay on your device only" — or remove this note.>`

---

## 🖼 Screenshots

<!--
![Home page](screenshots/home.png)
-->

_Add a screenshot of the app here._

---

## 🗺 Future Improvements

- [ ] Image upload for items
- [ ] Mark items as returned / resolved
- [ ] Backend and database for shared data across users
- [ ] User login
- [ ] Contact details or claim option for found items

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

`<Add a license, e.g. MIT, and a LICENSE file, or remove this section.>`

---

## 👤 Author

**Aryan Raj** — [@Aryan07Raj2001](https://github.com/Aryan07Raj2001)

Project link: [https://github.com/Aryan07Raj2001/campus-lost-found](https://github.com/Aryan07Raj2001/campus-lost-found)
