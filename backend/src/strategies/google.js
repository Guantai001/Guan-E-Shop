const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const GoogleUser = require('../database/schemas/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await GoogleUser.findById(id);
    if (!user) throw new Error('User not found');
    console.log("User found: " + user);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/api/user/google/callback",
  passReqToCallback: true,
  scope: ['email', 'profile']
}, async (req, accessToken, refreshToken, profile, done) => {
  console.log(accessToken, refreshToken);
  console.log(profile);
  try {
    const googleUser = await GoogleUser.findOne({
      email: profile.emails[0].value
    });
    if (googleUser) {
      console.log("User found: " + googleUser);
      req.session.user = googleUser._id; // Store the user ID in the session
      req.session.token = accessToken; // Store the access token in the session
      return done(null, googleUser);
    } else {
      const newUser = new GoogleUser({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value
      });
      // Save the new user in the database
      await newUser.save();
      req.session.user = newUser._id; // Store the user ID in the session
      req.session.token = accessToken; // Store the access token in the session
      console.log("User created: " + newUser);
      return done(null, newUser);
    }
  } catch (err) {
    console.log(err);
    done(err, false, {
      message: err.message
    });
  }
}));
