import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    // sceneStyle is global and applies to ALL scenes in application
    <Router sceneStyle={{ marginTop: 350 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
    </Router>
  );
};

export default RouterComponent;
