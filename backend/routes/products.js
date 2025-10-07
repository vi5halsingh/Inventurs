const express = require('express');
const { protect } = require('../middleware/auth');
const { 
  getProducts, 
  getProduct, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', protect, createProduct);

router.put('/:id', protect, updateProduct);

router.delete('/:id', protect, deleteProduct);

module.exports = router;
