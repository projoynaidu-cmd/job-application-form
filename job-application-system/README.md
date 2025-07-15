# Job Application System

A modern, full-stack job application form built with:

- Frontend: HTML + Tailwind CSS + JavaScript (multi-step wizard)
- Backend: Node.js + Express + MongoDB
- File Upload: PDF resumes (max 5MB)

## Setup

### Frontend

Just open `frontend/index.html` in your browser.

### Backend

1. Go to `backend/`:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install express mongoose multer cors dotenv
```

3. Create a `.env` file:
```
MONGO_URI=your_mongo_connection_string
PORT=5000
```

4. Start the server:
```bash
node app.js
```

## Features

- Multi-step form with progress tracking
- Resume upload with validation (PDF only, max 5MB)
- MongoDB schema to store applicant metadata
- Basic validation and file security
- Tailwind CSS for modern UI design
