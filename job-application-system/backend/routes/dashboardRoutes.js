// backend/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const verifyToken = require('../middleware/authMiddleware');
router.use(verifyToken); // Protect all dashboard routes

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



// DELETE /api/dashboard/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Application.findByIdAndDelete(id);
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete application' });
  }
});

 
module.exports = router;
