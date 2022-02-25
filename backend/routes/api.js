const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const router = new express.Router();
const ProductController = require("../controllers/product-controller.js");
const UserController = require("../controllers/user-controller.js");
const OrderController = require("../controllers/order-controller.js");
const isAuth = require("../middleware/is-auth-api-middleware.js");

// ======================  PRODUCTS  =============================
router.get("/api/products/seed", expressAsyncHandler(ProductController.seed));
router.get("/api/products", expressAsyncHandler(ProductController.getProducts));
router.get(
  "/api/products/:id",
  expressAsyncHandler(ProductController.getProduct)
);

// ======================  USERS  ================================
router.get("/api/users/seed", expressAsyncHandler(UserController.seed));
router.post("/api/users/signin", expressAsyncHandler(UserController.signin));
router.post(
  "/api/users/register",
  expressAsyncHandler(UserController.register)
);

// ======================  ORDERS  ================================
router.post(
  "/api/orders",
  isAuth,
  expressAsyncHandler(OrderController.saveOrder)
);
router.get(
  "/api/orders/:id",
  isAuth,
  expressAsyncHandler(OrderController.getOrder)
);
router.get(
  "/api/orders/mine",
  isAuth,
  expressAsyncHandler(OrderController.getMineOrders)
);

module.exports = router;
