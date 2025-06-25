// === routes/offers.js ===
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all offers
router.get('/', (req, res) => {
  db.query('SELECT * FROM offers', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new offer
router.post('/', (req, res) => {
  const { couponCode, percentage, description, expiryDate, status, image } = req.body;

  const sql = 'INSERT INTO offers (coupon_code, percentage, description, expiry_date, status, image_url) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [couponCode, percentage, description, expiryDate, status, image];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Offer added', offerId: result.insertId });
  });
});

// Update offer by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { couponCode, percentage, description, expiryDate, status, image } = req.body;

  const sql = 'UPDATE offers SET coupon_code=?, percentage=?, description=?, expiry_date=?, status=?, image_url=? WHERE id=?';
  const values = [couponCode, percentage, description, expiryDate, status, image, id];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Offer updated' });
  });
});

// Delete offer by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM offers WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Offer deleted' });
  });
});

module.exports = router;
