const {
  Router
} = require('express');
const router = Router();
const passport = require('passport');
const upload = require('../utils/multer');
const cloudinary = require('../utils/cloudinary');
const User = require('../database/schemas/User');
const {
  hashPassword,
  comparePassword
} = require('../utils/helpers');

var jwt = require('jsonwebtoken');
const config = require('../config');



router.get('/currentuser', (req, res) => {
  if (req.session.user) {
    return res.status(200).json({
      user: req.session.user,
      token: req.session.token
    });
  } else {
    return res.status(401).json({
      message: "Unauthorized NOY FOUNF"
    });
  }
});





router.get('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).json({
    message: "Logged out successfully"
  });
});

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  // The user is now logged in and req.user contains the user information
  console.log(req.user);
  req.session.user = req.user;
  req.session.token = req.authInfo.access_token; // Store the access token in the session

  // Redirect to the home page
  res.redirect('http://localhost:5173/');
});

// get all users
router.get('/', async (req, res) => {
  try {
    // Check if user is logged in
    const currentUser = getCurrentUser(req);
    if (currentUser) {
      // User is logged in
      const users = await User.find();
      return res.status(200).json({
        users
      });
    } else {
      // User is not logged in
      return res.status(401).json({
        message: "Unauthorized"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      registrationMethod
    } = req.body;
    const userDb = await User.findOne({
      email
    });
    if (userDb) {
      return res.status(400).json({
        message: "User already exists"
      });
    } else {
      let newUser;
      if (registrationMethod === 'google') {
        newUser = new GoogleUser({
          name,
          email,
          googleId: 'generatedGoogleId',
          picture: req.body.picture,
        });
      } else {
        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          picture: req.body.picture,

        });
        newUser.password = await hashPassword(newUser.password);
        await newUser.save();
        return res.status(201).json({
          message: "User created successfully",
          newUser
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

// login user

router.post('/login', async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: 'Please enter all fields'
      });
    }

    const userDb = await User.findOne({
      email
    });

    if (!userDb) {
      return res.status(400).json({
        message: 'Email or password is incorrect'
      });
    }

    const isMatch = await comparePassword(password, userDb.password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Email or password is incorrect'
      });
    }

    // Create a token
    const token = jwt.sign({
      id: userDb._id
    }, config.secret, {
      expiresIn: '24h'
    });

    req.session.user = userDb;
    // After successful authentication
    return res.status(200).json({
      message: 'Logged in successfully',
      user: userDb,
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
});


// delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    return res.status(200).json({
      message: "User deleted successfully"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});


module.exports = router;