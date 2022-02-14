const Product = require("../db/models/product-model");
const products = require("../data/products");

class ProductController {
  async seed(req, res) {
    try {
      // await Product.deleteMany({})
      const createdProducts = await Product.insertMany(products);
      res.send(createdProducts);
    } catch (error) {
      res.send(error);
    }
  }

  async getProducts(req, res) {
    const products = await Product.find({});
    res.send(products);
  }

  async getProduct(req, res) {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    res.send(foundProduct);
  }
}

module.exports = new ProductController();
