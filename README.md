### 📦 React Product Dashboard

A modern React dashboard application that displays products in a dynamic, editable table with **infinite scrolling**, **search**, and **sorting**.

This project demonstrates real-world frontend engineering skills including API integration, state management, reusable components, and performance optimization using the Intersection Observer API.

---

## 🚀 Live Demo

👉 Deploy link (add your Vercel URL here)

---

## ✨ Features

✅ Fetch products from API
✅ Infinite scrolling using Intersection Observer
✅ Editable product title
✅ Search products instantly
✅ Sort by price and rating
✅ Local storage persistence for edits
✅ Clean and responsive UI
✅ Built with React Hooks only
✅ No third-party table libraries

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6+)
* React Hooks
* Intersection Observer API
* CSS (custom styling)
* Local Storage
* Vercel (deployment)

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── ProductTable.jsx
 │    ├── TableRow.jsx
 │    ├── EditableCell.jsx
 │    └── Loader.jsx
 │
 ├── hooks/
 │    └── useInfiniteScroll.js
 │
 ├── services/
 │    └── api.js
 │
 ├── App.jsx
 ├── index.css
 └── main.jsx

---

## ⚙️ Installation & Setup

### 1️⃣ Clone repository

```
git clone <https://github.com/arvind05kumar/react-product-dashboard.git>
cd react-product-dashboard
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start development server

```
npm run dev
```

App runs at:

```
http://localhost:5173/
```

---

## 🔄 How It Works

### API Fetching

Products are fetched from:

```
https://dummyjson.com/products?limit=10&skip=10
```

### Infinite Scroll

Implemented using:

```
Intersection Observer API
```

Automatically loads more products when user reaches bottom.

### State Management

* useState
* useEffect
* useCallback

### Editable Table

Titles can be edited inline and saved to Local Storage.

---

## 🧠 Key Technical Decisions

* Avoided third-party table libraries to show core React skills
* Used Intersection Observer instead of scroll events for better performance
* Split logic into reusable components and custom hooks
* Maintained clean folder architecture

---

## 📸 Screenshots

(Add screenshots after deployment)


---

## 🚀 Deployment

Deployed using Vercel:

```
npm run build
vercel deploy
```

---

## 📚 Learning Outcomes

This project demonstrates:

* API handling
* Component design
* Infinite scrolling
* Performance optimization
* Clean architecture
* Professional UI practices

---

## 👨‍💻 Author

Arvind Kumar
Full Stack Developer

---

⭐ If you like this project, feel free to star the repository!
