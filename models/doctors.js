/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {
    let getAll = (callback) => {
        let query = 'SELECT * FROM doctors';

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

    let getId = (name, callback) => {
        let query = 'SELECT id FROM doctors WHERE name=$1';

        dbPoolInstance.query(query, [name], (error, queryResult) => {
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

    let getName = (doctor_id, callback) => {
        let query = 'SELECT name FROM doctors WHERE id=$1';

        dbPoolInstance.query(query, [doctor_id], (error, queryResult) => {
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

    let addDoctor = (name, callback) => {
        let query = 'INSERT INTO doctors (name) VALUES ($1)';

        dbPoolInstance.query(query, [name], (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    let removeDoctor = (doctor_id, callback) => {
        let query = 'DELETE FROM doctors WHERE id=$1';

        dbPoolInstance.query(query, [doctor_id], (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, null);
            }
        });
    };

    return {
        getAll: getAll,
        getId: getId,
        getName: getName,
        addDoctor: addDoctor,
        removeDoctor: removeDoctor
    };
};