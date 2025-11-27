# 📦 QuickCart – Online Shopping Platform

QuickCart is a modern online shopping web application where users can **browse, add, view, delete, and manage products** such as laptops, mobiles, and headphones.  
It includes **secure authentication**, **protected routes**, and a fully responsive UI built with **Next.js**, **TailwindCSS**, **DaisyUI**, and an **Express.js backend**.

---

## 🚀 Features

- Fully responsive modern UI (Next.js + TailwindCSS + DaisyUI)
- Google & Credentials authentication (NextAuth.js)
- Protected pages with auto-redirect for unauthorized users
- Product listing with search & filters
- Product details page with full information
- Add Product page (protected) with form validation
- Manage Products page with View & Delete actions
- Express.js backend API with CRUD endpoints
- Reusable components (Navbar, Hero, Cards, Footer)
- Clean typography, spacing & hover animations
- Mobile-first design with consistent layout system
- Shows toast/alert on success 

---

# 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js (App Router), React, TailwindCSS, DaisyUI |
| **Auth** | NextAuth.js (Google + Credentials) |
| **Backend** | Express.js REST API |
| **Database** | MongoDB |
| **Deployment** | Vercel  |

---

# 📁 Project Structure
```
QuickCart/
│── backend/ # Express.js API
│── src/
│ ├── app/ # Next.js App Router
│ │ ├── (routes)
│ │ ├── add-product/
│ │ ├── manage-products/
│ │ ├── products/
│ │ ├── products/[id]/
│ │ └── login/
│ ├── components/ # Navbar, Hero, Cards, Footer
│ ├── context/ # AuthContext
│ ├── hooks/ # useAxios, etc.
│── public/
│── README.md
```

---

# ⚙️ Setup & Installation

## 📌 1. Clone the Repository
```bash
git clone https://github.com/nafiz512/QuickCart-using-Next.js.git
cd quickcart

npm install
```

## Create .env.local

```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
BACKEND_URL=http://localhost:5000

```

```
npm run dev

```

## Backend (Express.js API)
| Method | Route | Description |
|--------|--------|-------------|
| GET | /products | Get all products |
| GET | /products/:id | Get product details |
| POST | /products | Add new product |
| DELETE | /products/:id | Delete product |

