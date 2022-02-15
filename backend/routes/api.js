const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const router = new express.Router();
const ProductController = require("../controllers/product-controller.js");

// ======================  PRODUCTS  =============================
router.get("/api/products/seed", expressAsyncHandler(ProductController.seed));
router.get("/api/products", expressAsyncHandler(ProductController.getProducts));
router.get(
  "/api/products/:id",
  expressAsyncHandler(ProductController.getProduct)
);

module.exports = router;
