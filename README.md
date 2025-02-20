# 📩 Chat App (MERN Stack)

A real-time chat application built using the MERN stack with authentication, real-time messaging, and a modern UI.


🖼 Screenshots
Frontend: 1.png, 2.png, 3.png, 4.png, 6.png, 7.png, 8.png, 9.png
Backend: 5.png


## ✨ Features
- ✅ User Authentication (Signup, Login, Logout)
- 🔐 Hashed Passwords using Bcrypt
- 🔑 JWT-based Authentication
- ⚡ Real-time Chat using Socket.io
- 📸 Image Uploads via Cloudinary
- 🔔 Notifications with React-Hot-Toast
- 🎨 Modern UI with TailwindCSS & DaisyUI
- 🎭 Icons with Lucide React

## 🛠 Tech Stack
- **Frontend:** React.js, TailwindCSS, DaisyUI, React-Hot-Toast, Lucide React
- **Backend:** Node.js, Express.js, MongoDB, Socket.io
- **Authentication:** Bcrypt for password hashing, JWT for authentication
- **Storage:** Cloudinary for image uploads

## 🚀 Installation & Setup

### 📌 Prerequisites
- Node.js
- MongoDB
- Cloudinary account

### 🔧 Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Run the server:
```bash
npm start
```

### 🎨 Frontend Setup
```bash
cd frontend
npm install
```
Run the React app:
```bash
npm start
```

## 📖 Usage
1. ✍️ Sign up or log in.
2. 💬 Start a real-time chat with other users.
3. 🔐 Secure authentication using JWT.
4. 📷 Profile images and media uploads via Cloudinary.

## 🤝 Contributing
Feel free to fork and contribute to this project.


