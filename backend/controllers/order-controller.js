class OrderController {
  async saveOrder(req, res) {
    res.send(req.body);
  }
}

module.exports = new OrderController();
