// backend-job-application/app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Application = require('./models/Application');
const nodemailer = require('nodemailer');

const dashboardRoutes = require('./routes/dashboardRoutes');
const authRoutes = require('./routes/authRoutes');

// const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Mongo error:', err));

// Nodemailer config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: 'New Job Application',
  text: 'A new job application has been submitted.'
};

// Multer storage config
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Only PDF files are allowed!'));
    }
    cb(null, true);
  }
});

// API Route
// API Route
app.post('/api/job-application', upload.single('resume'), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      linkedin,
      portfolio,
      github,
      coverLetter,
      position,
      availabilityDate,
      relocate,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !position ||
      !availabilityDate ||
      !relocate ||
      !req.file
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const application = new Application({
      fullName,
      email,
      phone,
      linkedin,
      portfolio,
      github,
      coverLetter,
      position,
      availabilityDate,
      willingToRelocate: relocate === 'yes',
      resumePath: req.file.path,
    });

    await application.save();

    // ✅ Email to HR (YOU)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `📥 New Job Application: ${fullName}`,
      html: `
        <h3>New Job Application Submitted</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'N/A'}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Willing to Relocate:</strong> ${relocate}</p>
        <p><strong>Resume Path:</strong> ${req.file.path}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    });

    // ✅ Confirmation email to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // user's email
      subject: "✅ We Received Your Application",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for applying for the <strong>${position}</strong> position.</p>
        <p>We’ve received your application and will get back to you soon.</p>
        <br/>
        <p>Best regards,<br>VNexus HR Team</p>
      `,
    });

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
