const Product = require('../models/Product')

// CREATE
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// GET ALL
exports.getProducts = async (req, res) => {
    const products = await Product.find().populate('category')
    res.json(products)
}

// GET ONE
exports.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category')
    res.json(product)
}

// UPDATE
exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(product)
}

// DELETE
exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product deleted" })
}