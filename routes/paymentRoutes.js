const Keys = require('../config/keys');
const requireLogin = require('../middleware/requireLogin');
const Stripe = require('stripe')(Keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charges = await Stripe.charges.create({
            amount: 500,
            currency: 'usd',
            source: req.body.id,
            description: '$5 for 5 credits'
        });
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    })
}