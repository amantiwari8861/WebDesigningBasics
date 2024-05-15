// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Create Express application
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:1234@cluster0.fxjosz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Define product schema
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    description: String
});

// Create Product model
const Product = mongoose.model('Product', productSchema);

// Express route handlers
app.use(express.json());
// Insert multiple products
app.post('/products/insertMany', async (req, res) => {
    try {
        const products = req.body; // Array of product objects
        const insertedProducts = await Product.insertMany(products);
        res.status(201).json(insertedProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a product
app.post('/products', async (req, res) => {
    try {
        const { id, name, price, description } = req.body;
        const newProduct = new Product({ id, name, price, description });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a product
app.put('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, newData, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a product
app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Get a specific product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get products with price less than a specified value
app.get('/products/price/lessthan/:value', async (req, res) => {
    try {
        const value = parseInt(req.params.value);
        const products = await Product.find({ price: { $lt: value } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get products with price greater than a specified value
app.get('/products/price/greaterthan/:value', async (req, res) => {
    try {
        const value = parseInt(req.params.value);
        const products = await Product.find({ price: { $gt: value } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
