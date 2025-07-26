// backend/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// GET all job applications
router.get('/', async (req, res) => {
  try {
    const apps = await Application.find().sort({ submittedAt: -1 });
    res.status(200).json(apps);
  } catch (error) {
    console.error('Dashboard fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

module.exports = router;
