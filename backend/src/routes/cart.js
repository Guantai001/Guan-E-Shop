const {Router} = require('express');
const router = Router();
const passport = require('passport');
const upload = require('../utils/multer');
const cloudinary = require('../utils/cloudinary');
const Cart = require('../database/schemas/Cart');


//get all products
router.get('/', async (req, res) => {
    try {
        const amenities = await Product.find();
        res.json(amenities);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//get specific product
router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (err) {
        res.json({
            message: err
        });
    }
}
);

//create product
router.post("/create", async (req, res) => {
    try {
        const cart = new Cart({
            user: req.body.user,
            products: req.body.products,
        });
        const savedCart = await cart.save();
        res.json(savedCart);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//update product
router.patch('/:productId', async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne({
            _id: req.params.productId
        }, {
            $set: {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
                category: req.body.category
            }
        });
        res.json(updatedProduct);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

//delete product
router.delete('/:productId', async (req, res) => {
    try {
        const removedProduct = await Product.remove({
            _id: req.params.productId
        });
        res.json(removedProduct);
    } catch (err) {
        res.json({
            message: err
        });
    }
}
);

module.exports = router;
