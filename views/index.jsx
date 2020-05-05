var React = require('react');
var DefaultLayout = require('./layouts/default');

class Index extends React.Component {
  render() {
    return (
        <DefaultLayout cookies={this.props.cookies}>
        <div style={{backgroundImage: "url('images/index.jpg')", height: '800px', backgroundPosition: 'center top', backgroundSize: 'cover'}}></div>

        <div className="container text-center" style={{fontSize: '24px'}}>
        <h1 className="my-5" style={{fontSize: '60px'}}>Welcome to Your Rebirth</h1>
        <p className="my-5">
        We cannot choose the way we look like as we come into this world, but with expert advice and help, you can be reborn with the looks you were meant to possess.
        </p>
        <p className="my-5">
        At Leslie Chua Aesthetic Surgery, we understand the struggles you face wrestling with thoughts about the way you look. We strive to help you discover your own beauty and regain the confidence needed to face the world.
        </p>
        <p className="my-5">
        Our team of professionals have years of experience, and practice the highest level of safety in all their procedures. You are safe in our hands, let us deliver you into a brave new world.
        </p>
        </div>

        <div style={{backgroundImage: "url('images/index2.jpg')", height: '800px', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>

        <div className="container text-center">
        <h1 className="my-5" style={{fontSize: '60px'}}>Our Services</h1>
        </div>

        <div className="container-fluid">
        <div className="row text-center" style={{fontSize: '24px'}}>
        <div className="col">
        <figure className="figure">
        <img src="images/nose-square.jpg" className="figure-img img-fluid rounded-lg"/>
        <figcaption className="figure-caption">NOSE IMPLANTS</figcaption>
        </figure>
        </div>
        <div className="col">
        <figure className="figure">
        <img src="images/breast-square.jpg" className="figure-img img-fluid rounded-lg"/>
        <figcaption className="figure-caption">BREAST ENHANCEMENT</figcaption>
        </figure>
        </div>
        <div className="col">
        <figure className="figure">
        <img src="images/tummy-square.jpg" className="figure-img img-fluid rounded-lg"/>
        <figcaption className="figure-caption">TUMMY TUCK</figcaption>
        </figure>
        </div>
        </div>
        </div>
        </DefaultLayout>
        );
}
}

module.exports = Index;