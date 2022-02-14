const express = require("express");
const router = new express.Router();
const ProductController = require("../controllers/product-controller.js");

// ======================  PRODUCTS  =============================
router.get("/api/products/seed", ProductController.seed);
router.get("/api/products", ProductController.getProducts);
router.get("/api/products/:id", ProductController.getProduct);

module.exports = router;
