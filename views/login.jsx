var React = require('react');
var UserDefault = require('./layouts/user-default');

class Login extends React.Component {
  render() {
    return (
        <UserDefault>
        <form className='mt-5 text-center' method='POST' action='/login/'>
        <h3>Username</h3>
        <input className='my-3' type='text' name='username'/>
        <h3>Password</h3>
        <input className='my-3' type='password' name='password'/>
        <br/><br/>
        <input type='submit' value='Log In'/>
        </form>
        </UserDefault>
        );
}
}

module.exports = Login;