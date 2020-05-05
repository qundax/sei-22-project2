var React = require('react');
var DefaultLayout = require('./layouts/default');

class Appointments extends React.Component {
  render() {
    if (this.props.appt === null) {
        return (
            <DefaultLayout cookies={this.props.cookies}>
            <h1 className='my-5 text-center'>You have no appointments</h1>
            <form className='text-center' method='GET' action='/appointments/new'>
            <input type='submit' value='Book Appointment'/>
            </form>
            </DefaultLayout>
            );
    } else {
        const surgeries = this.props.surgeries;
        const doctors = this.props.doctors;
        const rows = this.props.appt.map((row, index) => {
            return (
                <tr>
                <th scope="row">{index+1}</th>
                <td>{surgeries[index]}</td>
                <td>{doctors[index]}</td>
                <td>{row.appt_date}</td>
                <td>{row.appt_time}</td>
                </tr>
                )
        })

        return (
            <DefaultLayout cookies={this.props.cookies}>
            <h1 className='my-5 text-center'>Appointments</h1>

            <div className='d-flex justify-content-center align-items-center'>
            <table className="table table-striped w-75 mb-5">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Surgery</th>
            <th scope="col">Doctor</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
            </table>
            </div>

            <form className='text-center' method='GET' action='/appointments/new'>
            <input type='submit' value='Book Appointment'/>
            </form>
            </DefaultLayout>
            );
    }
}
}

module.exports = Appointments;