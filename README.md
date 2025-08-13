# temp_react

**temp_react** is a default template for developing **Information Systems** with a **Backend (Node.js)** and **Frontend (React.js - Vite)** architecture.  
This project is built using **Node.js v20.19.0** to ensure development environment consistency.

---

## 📂 Directory Structure

```
temp_react/
├── server/   # Backend - Node.js
└── admin/    # Frontend - React.js (Vite)
```

---

## ⚙️ Technologies Used

### Backend (`/server`)

- **Node.js** v20.19.0
- Your preferred backend framework (Express.js, Koa, etc.)
- REST API as a bridge between backend and frontend

### Frontend (`/admin`)

- **React.js** (with Vite as the build tool)
- ES Modules and JSX
- **Material UI** v7.3.1 for UI components and styling
- API communication using fetch/axios

---

## 🚀 How to Run

### 1. Preparation

Make sure **Node.js v20.19.0** is installed:

```bash
node -v
# Output: v20.19.0
```

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd admin
npm install
```

---

### 3. Run the Application

#### Run Backend

```bash
cd server
npm run dev
```

The backend server will run on the configured port (default: `http://localhost:5000`).

#### Run Frontend

```bash
cd admin
npm run dev
```

The frontend will run on Vite's default port (default: `http://localhost:5173`).

---

## 📌 Notes

- Use **Node.js v20.19.0** to avoid compatibility issues.
- This template is meant as a starting point; feel free to expand it based on your project needs.
- Ensure the environment variables (`.env`) are set properly in both **server** and **admin** directories.
- This project uses **Material UI v7.3.1** for consistent and responsive styling.

---

## 📝 License

This project is licensed under the **Dinas Komunikasi, Informatika, dan Persandian Kabupaten Konawe Selatan**.  
You may use, modify, and distribute it according to the applicable policies of the license holder.
