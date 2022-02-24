const Order = require("../db/models/order-model");

class OrderController {
  async saveOrder(req, res) {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        prices: req.body.prices,
        user: req.user._id,
      });

      const createdOrder = await order.save();

      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  }
}

module.exports = new OrderController();
