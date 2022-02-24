const Order = require("../db/models/order-model");

class OrderController {
  async saveOrder(req, res) {
    if (req.body.orderedItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        orderedItems: req.body.orderedItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        orderPrices: req.body.orderPrices,
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
