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
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 5
        const skip = (page - 1) * limit

        const { minPrice, maxPrice, category, sort, search } = req.query

        let filter = {}

        // Filter theo giá
        if (minPrice || maxPrice) {
            filter.price = {}
            if (minPrice) filter.price.$gte = Number(minPrice)
            if (maxPrice) filter.price.$lte = Number(maxPrice)
        }

        // Filter theo category
        if (category) {
            filter.category = category
        }

        // Search theo tên (không phân biệt hoa thường)
        if (search) {
            filter.name = { $regex: search, $options: "i" }
        }

        // Query
        const products = await Product.find(filter)
            .populate("category")
            .sort(sort || "-createdAt")
            .skip(skip)
            .limit(limit)

        const total = await Product.countDocuments(filter)

        res.json({
            total,
            page,
            totalPages: Math.ceil(total / limit),
            products
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
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