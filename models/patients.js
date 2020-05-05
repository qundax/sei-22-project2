/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
    let getAll = (callback) => {
        let query = 'SELECT * FROM patients';

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let addPatient = (formValues, callback) => {
        const username = formValues.username;
        const password = sha256(formValues.password);
        const phone = formValues.phone;
        const email = formValues.email;

        const values = [username, password, phone, email];

        let query = 'INSERT INTO patients (username, password, phone, email) VALUES ($1, $2, $3, $4) RETURNING id, username';

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0]);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let editPatient = (username, formValues, callback) => {
        const phone = formValues.phone;
        const email = formValues.email;

        let query = 'UPDATE patients SET phone=$1, email=$2 WHERE username=$3'

        dbPoolInstance.query(query, [phone, email, username], (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    let authenticate = (formValues, callback) => {
        const username = formValues.username;
        const password = sha256(formValues.password);

        let query = 'SELECT * FROM patients WHERE username=$1';

        dbPoolInstance.query(query, [username], (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    if (queryResult.rows[0].password === password) {
                        callback(null, queryResult.rows[0]);
                    } else {
                        callback(null, false);
                    }
                } else {
                    callback(null, null);
                }
            }
        });
    };

    return {
        getAll: getAll,
        addPatient: addPatient,
        editPatient: editPatient,
        authenticate: authenticate
    };
};