const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema, "contacts");
module.exports = Contact;
