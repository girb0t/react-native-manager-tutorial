import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(input) {
    this.props.passwordChanged(input);
  }

  render() {
    const { emailValue, passwordValue } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={emailValue}
            placeholder='email@gmail.com'
            onChangeText={email => this.onEmailChange(email)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            value={passwordValue}
            placeholder='password'
            onChangeText={password => this.onPasswordChange(password)}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { emailValue, passwordValue } = state.auth;
  return { emailValue, passwordValue };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
