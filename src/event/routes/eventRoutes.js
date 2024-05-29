const express = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

router.get('/events', getEvents);
router.post('/events', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

module.exports = router;
