import { NativeWindStyleSheet } from 'nativewind';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
// import the screens of our app
import AccountScreen from './src/screens/AccountScreen';
import CaseContactCreateScreen from './src/screens/CaseContactCreateScreen';
import CaseContactDetailScreen from './src/screens/CaseContactDetailScreen';
import CaseContactListScreen from './src/screens/CaseContactListScreen';
import LoginScreen from './src/screens/LoginScreen';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

// this variable holds the navigation structure of our app
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  }),
  // mainFlow: createMaterialBottomTabNavigator({
  caseContactListFlow: createStackNavigator({
    CaseContactList: {
      screen: CaseContactListScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CaseContactDetail: {
      screen: CaseContactDetailScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  }),
  CaseContactCreateFlow: createStackNavigator({
    CaseContactCreateScreen: {
      screen: CaseContactCreateScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  }),
  AccountFlow: createStackNavigator({
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  }),
  // }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
