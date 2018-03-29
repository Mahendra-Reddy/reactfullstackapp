const keys = require('../config/keys')

module.exports = (survey) => {
    return `<html>
                <body>
                    <div style="text-align:center;">
                        <h3>I'd like your input!</h3>
                        <p>please answer the following questions:</p>
                        <p>${survey.body}</p>
                        <div>
                        <a href="http://localhost:3000/api/surveys/thanks">Yes</a>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                        </div>
                    </div>
                </body>
            </html>`
}