import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(input) {
    this.props.passwordChanged(input);
  }

  onButtonPress() {
    const { emailValue, passwordValue } = this.props;
    this.props.loginUser({ emailValue, passwordValue });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    const { emailValue, passwordValue } = this.props;
    const { alertDangerStyle } = styles;

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

        <Text style={alertDangerStyle}>
          { this.props.errorMessage }
        </Text>

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  alertDangerStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  }
};

const mapStateToProps = (state) => {
  const { emailValue, passwordValue, errorMessage, loading } = state.auth;
  return { emailValue, passwordValue, errorMessage, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
