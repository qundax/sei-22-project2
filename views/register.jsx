var React = require('react');
var UserDefault = require('./layouts/user-default');

class Register extends React.Component {
  render() {
    return (
        <UserDefault>
        <form className='mt-5 text-center' method='POST' action='/patients'>
        <h3>Username</h3>
        <input className='my-3' type='text' name='username'/>
        <h3>Password</h3>
        <input className='my-3' type='password' name='password'/>
        <h3>Phone</h3>
        <input className='my-3' type='text' name='phone'/>
        <h3>Email</h3>
        <input className='my-3' type='text' name='email'/>
        <br/><br/>
        <input type='submit' value='Log In'/>
        </form>
        </UserDefault>
        );
}
}

module.exports = Register;