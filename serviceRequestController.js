const { ServiceRequest, Mechanic, PartInventory } = require('../models');

const createServiceRequest = async (req, res) => {
  try {
    const { vehicleInfo, location, description, userId } = req.body;
    const serviceRequest = await ServiceRequest.create({ vehicleInfo, location, description, UserId: userId });
    res.status(201).json(serviceRequest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getServiceRequests = async (req, res) => {
  try {
    const serviceRequests = await ServiceRequest.findAll({ include: [Mechanic, PartInventory] });
    res.json(serviceRequests);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateServiceRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    await ServiceRequest.update({ status }, { where: { id } });
    res.json({ message: 'Service request status updated' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createServiceRequest,
  getServiceRequests,
  updateServiceRequestStatus
};