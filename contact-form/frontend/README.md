#  📬 Contact Form Frontend

This is the **frontend** part of the **Contact Form App** built with **React**, **Vite**, and **Tailwind CSS**.  
It connects to a **Node.js + Express** backend to store contact messages submitted by users to **MongoDB database**.

---

## 📦 Installation Guide

Follow the steps below to set up and run both the backend and frontend locally.

---

## 🖥️ 1. Clone the Repository

```bash
git clone https://github.com/TonyStark-19/nodejs-fullstack-practice.git

cd nodejs-fullstack-practice
```

## 🧩 2. Install and Run Backend of Contact Form

📁 Navigate to the backend folder and start the server:

```bash
cd contact-form/backend
npm install
node server.js
```

- The backend will start on `http://localhost:3000`

- Make sure it's running before starting the frontend

## 🌐 3. Install and Run Frontend of notes app

📁 In a new terminal, navigate to the frontend folder:

```bash
cd contact-form/frontend
npm install
npm run dev
```

- The frontend will run on `http://localhost:5173`

- It sends form data to the backend and displays success or error messages using react-toastify

## ✅ That’s it!

Your Contact Form is now running locally 🎉

- Frontend: `http://localhost:5173`

- Backend: `http://localhost:3000`

--- 

Make sure both servers are running in separate terminals. Enjoy coding!