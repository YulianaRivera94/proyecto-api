const express = require('express');
const { createServiceRequest, getServiceRequests, updateServiceRequestStatus } = require('../controllers/serviceRequestController');
const router = express.Router();

router.post('/', createServiceRequest);
router.get('/', getServiceRequests);
router.put('/:id', updateServiceRequestStatus);

module.exports = router;