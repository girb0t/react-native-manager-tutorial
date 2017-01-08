import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBvHUSMRviuYaj0GRLpj8Nc21tKTYWLyYY',
      authDomain: 'react-native-manager-tutorial.firebaseapp.com',
      databaseURL: 'https://react-native-manager-tutorial.firebaseio.com',
      storageBucket: 'react-native-manager-tutorial.appspot.com',
      messagingSenderId: '627380403097'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
