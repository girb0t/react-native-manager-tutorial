import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import * as actions from '../actions';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={this.props.emailValue}
            placeholder='email@gmail.com'
            onChangeText={email => this.props.onEmailChange(email)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
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
  return {
    emailValue: state.loginForm.emailValue
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
