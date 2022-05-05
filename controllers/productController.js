const Product = require('./../models/productModel')

exports.createProduct = async(req, res, next) => {
    const {
        name,
        description,
        price
    } = req.body
    const product = await Product.create({name, description, price})
    res.status(200).json({
        product
    })
}

exports.getProducts = async(req, res, next) => {
    const products = await Product.find();
    res.json({
        products
    })
}

exports.getProductDetail = async(req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        res.status(400).json({
            message: "Done have Product"
        })
        return Error()
    }
    res.status(200).json({
        product
    })

}