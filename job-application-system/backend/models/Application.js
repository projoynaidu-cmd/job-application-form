// backend-job-application/models/Application.js

const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedin: { type: String },
  portfolio: { type: String },
  github: { type: String },
  coverLetter: { type: String },
  position: { type: String, required: true },
  availabilityDate: { type: Date, required: true },
  willingToRelocate: { type: Boolean, required: true },
  resumePath: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);
