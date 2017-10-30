import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';
import listScreen from './src/screen/ListScreen';
import filtersScreen from './src/screen/FiltersScreen';
import store from './src/store';

class App extends Component {
  render() {
      const MainNavigator = StackNavigator({
        home: { screen: HomeScreen,
          navigationOptions: {
              header: null
          }
        },
        list: { screen: listScreen,
          navigationOptions: {
              header: null
          }
        },
        filters: { screen: filtersScreen,
          navigationOptions: {
              header: null
            }
          },
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
