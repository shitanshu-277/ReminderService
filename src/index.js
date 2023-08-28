const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');
const TIcketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TIcketController.create);
    app.listen(PORT,() => {
        console.log(`Server started at port ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'airlinemanagement1234@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the  support'
        // );

    });
}

setupAndStartServer();