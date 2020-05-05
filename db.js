/*
* ===================================================
* ===================================================
* ===================================================
* ===================================================
* ======             CONFIGURATION          =========
* ===================================================
* ===================================================
* ===================================================
* ===================================================
*/



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };

}else{
    configs = {
        user: 'qunda',
        host: '127.0.0.1',
        database: 'aesthetic',
        port: 5432
    };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});



/*
* ===================================================
* ===================================================
* ===================================================
* ===================================================
* ======        REQUIRE MODEL FILES         =========
* ===================================================
* ===================================================
* ===================================================
* ===================================================
*/


const allPatientsModelsFunction = require('./models/patients');
const patientsModelsObject = allPatientsModelsFunction( pool );

const allAppointmentsModelsFunction = require('./models/appointments');
const appointmentsModelsObject = allAppointmentsModelsFunction( pool );

const allSurgeriesModelsFunction = require('./models/surgeries');
const surgeriesModelsObject = allSurgeriesModelsFunction( pool );

const allDoctorsModelsFunction = require('./models/doctors');
const doctorsModelsObject = allDoctorsModelsFunction( pool );



/*
* ===================================================
* ===================================================
* ===================================================
* ===================================================
* ======          MODULE EXPORTS            =========
* ===================================================
* ===================================================
* ===================================================
* ===================================================
*/


module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool:pool,

    /*
    * ADD APP MODELS HERE
    */

    // users: userModelsObject,
    patients: patientsModelsObject,
    appointments: appointmentsModelsObject,
    surgeries: surgeriesModelsObject,
    doctors: doctorsModelsObject
};