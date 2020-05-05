module.exports = (app, allModels) => {


    /*
    *  =========================================
    *  =========================================
    *  =========================================
    *  =========================================
    *    ALL ROUTES
    *  =========================================
    *  =========================================
    *  =========================================
    */

    // require the controller
    const aesthetic = require('./controllers/aesthetic')(allModels);
    const patients = require('./controllers/patients')(allModels);
    const doctors = require('./controllers/doctors')(allModels);
    const appointments = require('./controllers/appointments')(allModels);

    // GET requests
    app.get('/index', aesthetic.index);
    app.get('/login', aesthetic.login);
    app.get('/register', aesthetic.register);
    app.get('/logout', aesthetic.logout);
    app.get('/appointments', aesthetic.appointments);
    app.get('/appointments/new', appointments.newAppt);

    // POST requests
    app.post('/login/', aesthetic.authenticate);
    app.post('/patients', patients.addPatient);
    app.post('/appointments/', appointments.addAppt);
};