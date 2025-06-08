const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Booking = require('../models/Booking');

// Get all bookings (admin)
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new booking
router.post('/',
    [
        body('customerName').notEmpty().withMessage('Customer name is required'),
        body('mobileNumber').notEmpty().withMessage('Mobile number is required'),
        body('numberOfPersons').isInt({ min: 1 }).withMessage('Number of persons must be at least 1'),
        body('bookingDate').isISO8601().withMessage('Invalid booking date'),
        body('bookingTime').notEmpty().withMessage('Booking time is required')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const booking = new Booking(req.body);
            const newBooking = await booking.save();
            res.status(201).json(newBooking);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
);

// Check booking status
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Cancel booking
router.patch('/:id/cancel', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (booking.status === 'cancelled') {
            return res.status(400).json({ message: 'Booking is already cancelled' });
        }

        booking.status = 'cancelled';
        const updatedBooking = await booking.save();
        res.json(updatedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 