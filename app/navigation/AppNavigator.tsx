import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { WelcomeScreen, DemoScreen } from '../screens'

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="DemoScreen" component={DemoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default AppNavigator
