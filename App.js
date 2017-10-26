import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';
import store from './src/store';

const initialState = {};

class App extends Component {
  componentWillMount() {
    console.log('MOUNT DEL COMPONENTO PRINCIPALE');
  }
  render() {
      const MainNavigator = StackNavigator({
        home: { screen: HomeScreen },
        home2: { screen: HomeScreen },
      }, {
          cardStyle: {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
      });

      return (
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      );
    }
}


export default App;
