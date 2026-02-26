const Category = require('../models/Category')

// CREATE
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        res.status(201).json(category)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// GET ALL
exports.getCategories = async (req, res) => {
    const categories = await Category.find()
    res.json(categories)
}

// GET ONE
exports.getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id)
    res.json(category)
}

// UPDATE
exports.updateCategory = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(category)
}

// DELETE
exports.deleteCategory = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.json({ message: "Category deleted" })
}