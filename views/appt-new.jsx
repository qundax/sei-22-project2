var React = require('react');
const UserDefault = require('./layouts/user-default');

class NewAppointments extends React.Component {
    render() {
        const surgeries = this.props.surgeries.map(surgery => {
            return <option>{surgery.type}</option>;
        });

        const doctors = this.props.doctors.map(doctor => {
            return <option>{doctor.name}</option>;
        });

        const timings = this.props.timings.map(timing => {
            return <option>{timing}</option>;
        });

        return (
            <html>
            <head>
            <meta charSet="UTF-8"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
            </head>
            <body style={{color: '#707070'}}>

            <div className="container-fluid" style={{height: '30px', backgroundColor: '#43A5BF'}}></div>

            <div className="container-fluid" style={{fontSize: '20px', borderBottom: 'solid #43A5BF 2px'}}>
            <div className="row text-center">
            <div className="col">
            <a href='/index'><img id='logo' className="m-3" src="../images/logo-light.png" style={{height: '100px'}}/></a>
            </div>
            </div>
            </div>

            <form className='mt-5 text-center' method='POST' action='/appointments/'>
            <h3>Surgery</h3>
            <select className='selectpicker my-3' name='surgery'>
            {surgeries}
            </select>
            <h3>Doctor</h3>
            <select className='selectpicker my-3' name='doctor'>
            {doctors}
            </select>
            <h3>Date</h3>
            <input className='my-3' type='date' name='date'/>
            <h3>Time</h3>
            <select className='selectpicker my-3' name='time'>
            {timings}
            </select>
            <br/><br/>
            <input type='submit' value='Book'/>
            </form>

            <div className="container-fluid" style={{height: '100px'}}></div>

            <div className="d-flex align-items-center justify-content-between" style={{height: '200px', backgroundColor: '#24637C', color: '#F5F5F5'}}>
            <img className="m-3" src="../images/logo-dark.png" style={{height: '100px'}}/>
            <p className="m-3 text-right">
            5 Lower Kent Ridge, National University Hospital
            <br/>
            Kent Ridge Wing 2, Level 4
            <br/>
            Singapore 119074
            <br/><br/>
            Opening Hours:
            <br/>
            Monday - Friday: 8:30AM - 5:30PM
            </p>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
            </body>
            </html>
            );
    }
}

module.exports = NewAppointments;