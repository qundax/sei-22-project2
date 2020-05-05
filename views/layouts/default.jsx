var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        const cookies = this.props.cookies;

        if (cookies && cookies.logged_in) {
            return (
                <html>
                <head>
                <meta charSet="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
                </head>
                <body style={{color: '#707070'}}>

                <div className="container-fluid" style={{height: '30px', backgroundColor: '#43A5BF'}}></div>

                <div className="container-fluid" style={{fontSize: '20px'}}>
                <div className="row">
                <div className="col-2">
                <img className="m-3" src="images/logo-light.png" style={{height: '100px'}}/>
                </div>
                <div className="col-8" style={{fontSize: '24px'}}>
                <nav className="navbar navbar-expand navbar-light h-100 w-100">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="/index">Home</a>
                <a className="nav-item nav-link ml-5" href="#">About</a>
                <a className="nav-item nav-link ml-5" href="#">Services</a>
                <a className="nav-item nav-link ml-5" href="#">Testimonials</a>
                <a className="nav-item nav-link ml-5" href="#">Contact</a>
                <a className="nav-item nav-link ml-5" href="/appointments">Appointments</a>
                </div>
                </div>
                </nav>
                </div>
                <div className="col">
                <nav className="navbar navbar-expand navbar-light h-100">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="/logout">Log Out</a>
                </div>
                </nav>
                </div>
                </div>
                </div>

                {this.props.children}

                <div className="container-fluid" style={{height: '300px'}}></div>

                <div className="d-flex align-items-center justify-content-between" style={{height: '200px', backgroundColor: '#24637C', color: '#F5F5F5'}}>
                <img className="m-3" src="images/logo-dark.png" style={{height: '100px'}}/>
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
        } else {
            return (
                <html>
                <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
                </head>
                <body style={{color: '#707070'}}>

                <div className="container-fluid" style={{height: '30px', backgroundColor: '#43A5BF'}}></div>

                <div className="container-fluid" style={{fontSize: '20px'}}>
                <div className="row">
                <div className="col-2">
                <img className="m-3" src="images/logo-light.png" style={{height: '100px'}}/>
                </div>
                <div className="col-8" style={{fontSize: '24px'}}>
                <nav className="navbar navbar-expand navbar-light h-100 w-100">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="/index">Home</a>
                <a className="nav-item nav-link ml-5" href="#">About</a>
                <a className="nav-item nav-link ml-5" href="#">Services</a>
                <a className="nav-item nav-link ml-5" href="#">Testimonials</a>
                <a className="nav-item nav-link ml-5" href="#">Contact</a>
                </div>
                </div>
                </nav>
                </div>
                <div className="col">
                <nav className="navbar navbar-expand navbar-light h-100">
                <div className="navbar-nav">
                <a className="nav-item nav-link border-right" href="/login">Log In</a>
                <a className="nav-item nav-link" href="/register">Register</a>
                </div>
                </nav>
                </div>
                </div>
                </div>

                {this.props.children}

                <div className="container-fluid" style={{height: '300px'}}></div>

                <div className="d-flex align-items-center justify-content-between" style={{height: '200px', backgroundColor: '#24637C', color: '#F5F5F5'}}>
                <img className="m-3" src="images/logo-dark.png" style={{height: '100px'}}/>
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
}

module.exports = DefaultLayout;