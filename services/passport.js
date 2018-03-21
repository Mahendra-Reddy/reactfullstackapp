const Passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose')
const Keys = require('../config/keys');
const User = mongoose.model('users');

Passport.serializeUser((user, done) => {
    done(null, user.id)
});

Passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
});

Passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ "googleId": profile.id })
    if (existingUser) {
        //we already have a record with given profile id
        return done(null, existingUser);
    }
    else {
        const user = await new User({ "googleId": profile.id }).save()
        done(null, user);
    }
}
));

Passport.use(new FacebookStrategy({
    clientID: Keys.facebookClientID,
    clientSecret: Keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ "googleId": profile.id })
        .then((existingUser) => {
            if (existingUser) {
                return done(null, existingUser)
            } else {
                new User({ "googleId": profile.id })
                    .save()
                    .then((user) => {
                        done(null, user);
                    })
            }

        })
    console.log(profile.id, "profile")
}));
