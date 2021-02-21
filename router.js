const express = require("express");
const router = express.Router();
const Customer = require("./model");

router.get("/", function (req, res) {
  Customer.find({}, (err, allCustomers) => {
    if (err) return console.log(err);
    else {
      res.status(200).json(allCustomers);
    }
  });
});

router.get("/:id", function (req, res) {
  Customer.findOne({ _id: req.params.id }, (err, customer) => {
    if (err) return console.log(err);
    else {
      res.status(200).json(customer);
    }
  });
});

router.get(
  "/:senderId/transaction/:receiverId/:senderAmount/:receiverAmount",
  function (req, res) {
    Customer.findByIdAndUpdate(
      { _id: req.params.senderId },
      {
        balance: req.params.senderAmount,
      },
      (err, sender) => {
        if (err) return console.log(err);
        else {
          Customer.findByIdAndUpdate(
            { _id: req.params.receiverId },
            {
              balance: req.params.receiverAmount,
            },
            (err, receiver) => {
              if (err) return console.log(err);
              else {
                res.status(200).json(receiver);
              }
            }
          );
        }
      }
    );
  }
);

module.exports = router;
