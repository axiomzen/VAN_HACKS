// in src/MyLoginPage.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'admin-on-rest';
import { withRouter } from 'react-router-dom';

class MyLoginPage extends Component {
    submit = async (e) => {
        e.preventDefault();
        // gather your data/credentials here
        const credentials = {
          username: 'demo@example.org',
          password: 'demo',
        };

        // Dispatch the userLogin action (injected by connect)
        const { authProvider, userLogin  } = this.props; 
        // this.props.userLogin(credentials);
        await authProvider("AUTH_LOGIN", credentials);
        if(localStorage.getItem("token")) {
          this.props.history.push("/#/clients");
        }
    }

    render() {
        return (
          <div className="login_form">
            <form onSubmit={this.submit}>
              <div className="input_section">
                <label>Email:</label>
                <input type="email" name="email" />
              </div>
              <div className="input_section">
                <label>password:</label>
                <input type="password" name="password" />
                <button>Submit</button>
              </div>
            </form>
          </div>
        );
    }
};

export default withRouter(connect(undefined, { userLogin })(MyLoginPage));

// // in src/MyLogoutButton.js
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { userLogout } from 'admin-on-rest';

// const MyLogoutButton = ({ userLogout }) => (
//     <button onClick={userLogout}>Logout</button>
// );