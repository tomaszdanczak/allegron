const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  primary: { type: Boolean, required: true, default: false },
});

const priceSchema = new Schema({
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

const deliverySchema = new Schema({
  inStock: { type: Boolean, required: true, default: false },
  leadTime: { type: String },
});

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviewCount: { type: Number, required: true },
    category: { type: [String], required: true },
    prices: { type: [priceSchema], required: true },
    images: { type: [imageSchema], required: true },
    description: { type: [String], required: true },
    details: { type: [String], required: true },
    deliveryInfo: { type: deliverySchema, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
