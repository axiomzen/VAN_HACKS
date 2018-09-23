// in src/MyLoginPage.js
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'admin-on-rest';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Logo from './image/glassbox_logo.svg';
import { bgImages } from './constants.js';

const styles = theme => ({
  label: {
    width: "4rem",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  input: {
    display: 'none',
    padding: '8px',
  },
  bgImages: {
    backgroundImage: `url(${bgImages[0]})`,
  }
}); 

class MyLoginPage extends Component { 
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  submit = async (e) => {
    e.preventDefault();
    // gather your data/credentials here
    const { email, password } = this.state;
    const credentials = {
      username: email,
      password: password,
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
      const { classes } = this.props;
      return (
        <div className="login_form" styles={classes.bgImages}>
          <div className="login-bg">
            <img src={Logo} width="240" />
            <form onSubmit={this.submit}>
              <div className="input_section">
                <InputLabel className={classes.label}>Email</InputLabel>
                <Input
                  // className={classes.input}
                  name="email"
                  type={'email'}
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input_section">
                <InputLabel className={classes.label}>Password</InputLabel>
                <Input
                  name="password"
                  type={'password'}
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      );
    }
};

export default withStyles(styles)(withRouter(connect(undefined, { userLogin })(MyLoginPage)));
