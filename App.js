import React from 'react';
import { Root } from "native-base";
import News from './components/screens/News'
import Detail from './components/screens/Detail'

import { createStackNavigator } from 'react-navigation';


const App = createStackNavigator({
  News: { screen: News },
  Detail: { screen: Detail },
});

export default () => (
  <Root>
    <App />
  </Root>
)