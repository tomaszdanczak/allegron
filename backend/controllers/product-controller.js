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

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      const foundProduct = await Product.findById(id);

      if (foundProduct) {
        res.send(foundProduct);
      } else {
        res.status(404).send({ message: "Product Not Found" });
      }
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  }
}

module.exports = new ProductController();
