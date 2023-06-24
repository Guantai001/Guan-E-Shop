const {Router} = require('express');
const router = Router();
const passport = require('passport');
const upload = require('../utils/multer');
const cloudinary = require('../utils/cloudinary');
const Product = require('../database/schemas/Product');


// router.use((req, res, next) => {
//  const {user} = req.session;
//     next();
// });

// get all products
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


// get specific product
router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// create product
router.post('/create',upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path); 
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: result.secure_url,
            category: req.body.category
        });
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({
            message: err
        });
    }
});



// update product
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
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// delete product
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
});



module.exports = router;
