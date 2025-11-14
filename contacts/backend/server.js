const express = require("express");
const server = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const Contact = require("./models/Contact");
const DB_URI = process.env.MONGO_URI;

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// Connect to MongoDB
mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(
        `Database connected successfully.\nServer is running on http://localhost:${port}`
      );
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  });

// Routes
//Root route
server.get("/", (request, response) => {
  response.send("Server is Live!");
});

// Get all contacts (READ)
server.get("/contacts", async (request, response) => {
  try {
    const contacts = await Contact.find();
    response.status(200).send(contacts);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Create a new contact (CREATE)
server.post("/contacts", async (request, response) => {
  try {
    const { name, email, phone, address, image } = request.body;
    const newContact = new Contact({
      name,
      contact: { email, phone, address },
      image,
    });
    const savedContact = await newContact.save();
    response.status(201).send(savedContact);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

server.delete("/contacts/:id", async (request, response) => {
  const { id } = request.params;
  try {
    await Contact.findByIdAndDelete(id);
    response.status(200).send({ message: `${id} is deleted` });
  } catch (error) {
    console.error(error);
    response.status(400).send({ message: error.message });
  }
});

// Get a single contact by ID (READ)
server.get("/contacts/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const contact = await Contact.findById(id);
    response.status(200).send(contact);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// PATCH
server.patch("/contacts/:id", async (request, response) => {
  const { id } = request.params;
  const { name, email, phone, address, image } = request.body;

  try {
    await Contact.findByIdAndUpdate(id, {
      name,
      contact: { email, phone, address },
      image,
    });
    response.status(200).send({ message: `${id} is updated` });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});
