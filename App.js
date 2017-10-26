import React, { Component } from 'react';
import { Platform, StatusBar, Provider } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import HomeScreen from './src/screen/HomeScreen';

const initialState = {};

class App extends Component {
  componentWillMount() {
    console.log('MOUNT DEL COMPONENTO PRINCIPALE');
  }
  render() {
      /*
      const store = createStore(
        appReducer,
        initialState,
        applyMiddleware(logger, ReduxThunk)
      );
      */
      // store.dispatch(downloadInitialTodolist());

      const MainNavigator = StackNavigator({
        home: { screen: HomeScreen },
        home2: { screen: HomeScreen },
      }, {
          cardStyle: {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
      });

      return (
          <MainNavigator />
      );
    }
}


export default App;
