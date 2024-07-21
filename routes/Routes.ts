// Import statements for express, controllers, and any other necessary modules
import { Router } from 'express';
import authController from '../controllers/AuthController';
import ProductController from "../controllers/ProductController";
import OrderController from "../controllers/OrderControler";

// Initialize the router and controllers
const router = Router();
const productController = new ProductController();
const orderController = new OrderController();

// Authentication routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Product routes
router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products/search', productController.searchProducts);
router.get('/products/filter', productController.filterProducts);
router.post('/products/:productId/reviews', productController.addReview);
router.delete('/products/:productId/reviews/:reviewId', productController.removeReview);

//order routes
router.post('/createorders', orderController.createOrder);
router.get('/getorders', orderController.getOrders);
router.get('/getordersbyid/:id', orderController.getOrderById);
router.put('/updateorders/:id', orderController.updateOrder);
router.delete('/deleteorders/:id', orderController.deleteOrder);
router.get('/searchorders/search', orderController.searchOrders);
router.get('/getordersbyuser/user/:userId', orderController.getOrdersByUser);


// Export the router
export default router;