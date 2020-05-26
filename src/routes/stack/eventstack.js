import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from "react-navigation-stack";
import EventsPick from '../screens/datetimepicker'
import AddEvents from '../screens/addedevents';
const EventStack= createStackNavigator({
    EventsPick:{
        screen:EventsPick,
    },
  AddEvents:{
    screen: AddEvents,
    // navigationOptions:({navigation})=>({
    //   events:navigation.getParam('events'),
    
    // })

    }

  
})

export default createAppContainer(EventStack);

