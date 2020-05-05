/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {
    let getAll = (callback) => {
        let query = 'SELECT * FROM surgeries';

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

    let getId = (type, callback) => {
        let query = 'SELECT id FROM surgeries WHERE type=$1';

        dbPoolInstance.query(query, [type], (error, queryResult) => {
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

    let getName = (surgery_id, callback) => {
        let query = 'SELECT type FROM surgeries WHERE id=$1';

        dbPoolInstance.query(query, [surgery_id], (error, queryResult) => {
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

    return {
        getAll: getAll,
        getId: getId,
        getName: getName
    };
};