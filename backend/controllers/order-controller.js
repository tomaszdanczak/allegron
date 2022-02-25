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

  async getOrder(req, res) {
    const order = await Order.findById(req.params.id);

    if (order) {
      res.send(order);
    } else {
      res.status(401).send({ message: "Order Not Found" });
    }
  }

  async getMineOrders(req, res) {
    const orders = await Order.find({ user: req.user._id });

    if (orders) {
      res.send(orders);
    } else {
      res.status(401).send({ message: "Orders Not Found" });
    }
  }
}

module.exports = new OrderController();
