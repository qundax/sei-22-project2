module.exports = (db) => {

    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let indexControllerCallback = (request, response) => {
        response.send('index page')
    };


    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
        index: indexControllerCallback,
    };
}