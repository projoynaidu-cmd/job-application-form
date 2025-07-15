# 📝 Job Application System

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-blue)

A full-featured, modern job application platform with responsive multi-step forms, real-time validation, resume upload, and email notifications — built with Node.js, MongoDB, and Tailwind CSS.

---

## ✨ Key Features

### 🎨 Frontend (Enhanced UX)
- Modern UI with Tailwind CSS and icons
- Multi-step form wizard with progress indicators
- Real-time validation and error feedback
- Drag & drop resume upload (PDF only)
- Inline resume preview before submission
- Animated confirmation screen after successful submission
- Fully responsive (mobile-first)

### ⚙️ Backend
- Node.js + Express REST API
- MongoDB for storing applicant metadata
- Multer for resume upload handling (max 5MB, PDF only)
- Sends 2 emails per submission:
  - 📩 To HR with resume attached
  - ✅ To applicant as confirmation
- Sanitizes inputs and uses proper MIME filtering

---

## 🆕 Recent UI Upgrades

| Feature            | Description |
|--------------------|-------------|
| ✅ **Progress Tracker**   | Step-based wizard with animation and bar |
| ✍️ **Form Enhancements**  | Focus states, icons, styled inputs, date pickers |
| 📎 **File Upload Redesign** | Drag & drop, styled box, size validation |
| ✅ **Success State**      | Green check animation, message & reset option |

---

## 🛠️ Tech Stack

| Layer     | Tech                     |
|-----------|--------------------------|
| Frontend  | HTML, JavaScript, Tailwind CSS |
| Backend   | Node.js, Express.js       |
| Database  | MongoDB + Mongoose        |
| Email     | Nodemailer + Gmail SMTP   |
| Upload    | Multer (PDF file handler) |

---

## ⚙️ Setup Instructions

### 🧾 1. Clone the repository

```bash
git clone https://github.com/projoynaidu-cmd/job-application-form.git
cd job-application-form
```

### 🔧 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongo_uri_here
PORT=5000

EMAIL_USER=your@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your@gmail.com
```

> ✅ Use [App Passwords](https://myaccount.google.com/apppasswords) if using Gmail.

Then run the server:

```bash
node app.js
```

You should see:

```
MongoDB connected
Server running on port 5000
```

---

### 🌐 3. Frontend Launch

```bash
cd ../frontend
```

Then open `index.html` in your browser — or use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.

---

## 📁 Project Structure

```
job-application-system/
├── frontend/
│   ├── index.html        # Multi-step job form
│   ├── assets/           # Images, icons
│   └── styles/           # Optional custom CSS
├── backend/
│   ├── models/           # Mongoose schemas
│   ├── uploads/          # Uploaded resumes
│   └── app.js            # Express server
├── .gitignore
├── .env                  # Not committed
└── README.md
```

---

## 📩 Email Logic

* **HR Notification**: sent to `EMAIL_TO`, with full applicant data + PDF resume attached.
* **User Confirmation**: sent to the applicant’s email with a thank-you message.

Emails are sent using **Nodemailer** via Gmail SMTP.

---

## 🧱 Built With

* 🟢 Node.js + Express
* 🌿 MongoDB + Mongoose
* 🎨 Tailwind CSS 3.x
* 📧 Nodemailer
* 📂 Multer
* 🔒 dotenv, CORS, and validation middleware

---

## 📸 Screenshots (optional)

> *You can add screenshots here if you'd like to show the UI visually:*

* ![Step 1 Form](assets/screenshots/step1.png)
* ![Resume Upload](assets/screenshots/resume-upload.png)
* ![Success Message](assets/screenshots/success.png)

---

## 🗺️ Roadmap

* [ ] Admin dashboard to view applicants
* [ ] Resume parsing and search
* [ ] Application status tracking
* [ ] Dark mode toggle
* [ ] Deploy on Vercel + Render

---

## 🪪 License

MIT © 2025 [Projoy Naidu](https://github.com/projoynaidu-cmd)

---

## 🙌 Credits

This project is maintained by [VueNexus](https://github.com/joinvnexus) — a free AI-powered Vue.js initiative for modern frontend tools.

---
