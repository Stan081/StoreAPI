const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({ name: 'vase table' })
    // throw new Error('testing async errors')
    res.status(200).json({ data: products, nbHIts: products.length })
}

const getAllProducts = async (req, res) => {
    const { featured } = req.query
    const queryObject = {}

    if (featured){
        queryObject.featured = featured === 'true' ? true : false
    }

    console.log(queryObject)
    const products = await Product.find(queryObject)
    res.status(200).json({ products, ngHits: products.lenght })
}


module.exports = { getAllProducts, getAllProductsStatic }