const express = require('express');
const router = express.Router();
const commerceController = require('../controllers/commerceController');
const { verifyToken } = require('../middleware/authMiddleware');
const { requireRole } = require('../middleware/rbacMiddleware');

// All routes require authentication
router.use(verifyToken);
router.use(requireRole('RETAILER'));

// Order management
router.post('/orders', commerceController.createOrder);
router.get('/orders', commerceController.getMyOrders);
router.get('/orders/:order_id', commerceController.getOrderById);

module.exports = router;
