const Passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', Passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', Passport.authenticate('google'),(req,res)=>{
        res.redirect('/surveys')
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/auth/facebook',Passport.authenticate('facebook',{
        scope:['user_friends', 'manage_pages']
    }));

    app.get('/auth/facebook/callback',Passport.authenticate('facebook'));

}
