const sha256 = require('js-sha256');

module.exports = (db) => {

    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let addPatient = (request, response) => {
        const formValues = request.body;

        db.patients.addPatient(formValues, (error, result) => {
            response.cookie('username', result.username);
            response.cookie('user_id', result.id);
            response.cookie('logged_in', sha256(result.id + 'welcome'));

            response.redirect('/index');
        });
    };

    let editPatient = (request, response) => {
        const formValues = request.body;
        const username = request.cookies.username;

        db.patients.editPatient(username, formValues, (error, result) => {
            response.send('edit patient');
        });
    };



    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
        addPatient: addPatient,
        editPatient: editPatient
    };
}