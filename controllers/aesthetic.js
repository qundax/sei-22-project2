const sha256 = require('js-sha256');

const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

async function asyncForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
}

module.exports = (db) => {

    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let index = (request, response) => {
        if (request.cookies && request.cookies.logged_in) {
            const cookies = request.cookies;

            response.render('index', {cookies});
        } else {
            response.render('index');
        }
    };

    let login = (request, response) => {
        response.render('login');
    };

    let authenticate = (request, response) => {
        const formValues = request.body;

        db.patients.authenticate(formValues, (error, result) => {
            response.cookie('user_id', result.id);
            response.cookie('username', result.username);
            response.cookie('logged_in', sha256(result.id + 'welcome'));

            response.redirect('/index');
        });
    };

    let register = (request, response) => {
        response.render('register');
    };

    let logout = (request, response) => {
        response.clearCookie('user_id');
        response.clearCookie('username');
        response.clearCookie('logged_in');

        response.redirect('/index');
    };

    let appointments = (request, response) => {
        if (request.cookies && request.cookies.logged_in) {
            const cookies = request.cookies;

            db.appointments.getPatientAppt(cookies.user_id, (error, result) => {
                const surgeries = [];
                const doctors = [];

                const getSurgeryName = async () => {
                    await asyncForEach(result, async row => {
                        await waitFor(50);
                        db.surgeries.getName(row.surgery_id, (error, result) => {
                            surgeries.push(result.type);
                            console.log('hello')
                        })
                    })
                }

                const getDoctorName = async () => {
                    await asyncForEach(result, async row => {
                        await waitFor(50);
                        db.doctors.getName(row.doctor_id, (error, result) => {
                            doctors.push(result.name);
                            console.log('me again')
                        })
                    })
                }

                getSurgeryName();
                getDoctorName();

                const pause = async () => {
                    await waitFor(500);
                    console.log('bye')

                    const data = {
                        'cookies': cookies,
                        'appt': result,
                        'surgeries': surgeries,
                        'doctors': doctors
                    }

                    response.render('appt', data)
                }

                pause();
            });
        }
    };


    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
        index: index,
        login: login,
        authenticate: authenticate,
        register: register,
        logout: logout,
        appointments: appointments
    };
}