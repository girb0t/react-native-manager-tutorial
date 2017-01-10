import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// see 'actions/index.js' for how redux-thunk works
import ReduxThunk from 'redux-thunk';
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
    // 2nd argument is for any initial state we want to pass. Apparently it's mostly
    // applicable to server-side rendering
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
