import React, { Component } from 'react';
import Telas from './src/routes'
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/';
import { PersistGate } from 'redux-persist/integration/react';
import { View, Text } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Telas></Telas>
        </PersistGate>
      </Provider>
    );
  }
}

export default App
