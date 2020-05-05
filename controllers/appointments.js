module.exports = (db) => {

    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let newAppt = (request, response) => {
        const patient_id = request.cookies.user_id;

        db.surgeries.getAll((error, result) => {
            const surgeries = result;

            db.doctors.getAll((error, result) => {
                const doctors = result;

                response.render('appt-new', {'surgeries': surgeries, 'doctors': doctors, 'timings': ['0900', '1300', '1700']});
            });
        });
    };

    let addAppt = (request, response) => {
        const surgery = request.body.surgery;
        const doctor = request.body.doctor;
        const patient_id = parseInt(request.cookies.user_id);
        const date = request.body.date;
        const time = request.body.time;

        db.surgeries.getId(surgery, (error, result) => {
            const surgery_id = result.id;

            db.doctors.getId(doctor, (error, result) => {
                const doctor_id = result.id;

                const values = [surgery_id, doctor_id, patient_id, date, time];
                console.log(values);

                db.appointments.addAppt(values, (error, result) => {
                    response.redirect('/appointments');
                });
            })
        });
    };


    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
        newAppt: newAppt,
        addAppt: addAppt
    };
}