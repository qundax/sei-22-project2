/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {
    let getAll = (callback) => {
        let query = 'SELECT * FROM appointments';

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

    let getPatientAppt = (patient_id, callback) => {
        let query = 'SELECT * FROM appointments WHERE patient_id=$1';

        dbPoolInstance.query(query, [patient_id], (error, queryResult) => {
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

    let addAppt = (formValues, callback) => {
        let query = 'INSERT INTO appointments (surgery_id, doctor_id, patient_id, appt_date, appt_time) VALUES ($1, $2, $3, $4, $5)';

        dbPoolInstance.query(query, formValues, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    let removeAppt = (appointment_id, callback) => {
        let query = 'DELETE FROM appointments WHERE id=$1';

        dbPoolInstance.query(query, [appointment_id], (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    return {
        getAll: getAll,
        getPatientAppt: getPatientAppt,
        addAppt: addAppt,
        removeAppt, removeAppt
    };
};