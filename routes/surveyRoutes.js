const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/surveyTemplate');
module.exports = app => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!')
    });

    app.post('/api/surveys/webhooks', (req, res) => {
     console.log(req.body)
     res.send({})
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, body, subject, recipients } = req.body;

        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(',').map(email => ({ email })),
            _user: req.user.id,
            dateSend: Date.now(),
            lastResponded: Date.now()
        });

        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
}