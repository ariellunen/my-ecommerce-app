# 🛍️ My E-Commerce Shop – React + TypeScript + TailwindCSS

A modern mini e-commerce UI built for a frontend home assignment.  
Users can browse digital products, search, and view detailed information with a clean and responsive interface.

🚀 **Live Demo:**  
👉 https://my-ecommerce-app-coral.vercel.app/

---

## 📦 Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- TailwindCSS v4
- Vercel Deployment
- Git Version Control

---

## 🧩 Features

### 📝 Product List Page
- Fetches products from local JSON mock
- Displays product name, image, price
- Click to navigate to product details
- Live search (case-insensitive)
- Responsive grid layout
- Clean UI built with TailwindCSS

### 📘 Product Details Page
- Large product image
- Short & long descriptions
- Category label
- Reviews list
- “Back to Products” button
- Graceful error handling for wrong product IDs

### ⚠️ Error Handling
- Custom 404 Not Found page
- Invalid route fallback
- Invalid product fallback with navigation back home

---

## 📁 Folder Structure

```text
src/
├── components/
│   └── ProductCard.tsx
├── data/
│   └── product.json
├── pages/
│   ├── productList.tsx
│   ├── productDetails.tsx
│   └── NotFound.tsx
├── router/
│   └── index.tsx
├── types/
│   └── product.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧪 Installation & Running Locally

```bash
git clone https://github.com/ariellunen/my-ecommerce-app
cd my-ecommerce-shop
npm install
npm run dev
```

---

## 🔨 Build
```bash
npm run build
```

---

## 🌐 Deployment
Hosted on Vercel
👉 https://my-ecommerce-app-coral.vercel.app/
