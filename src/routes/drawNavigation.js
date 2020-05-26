import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
// import Home from '../screens/home';
// import About from '../screens/about';
// import Header from '../shared/header';
import StudentInterFace from '../components/studentsrecords/StudentInterface';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Form from '../screens/form';
import StudentCalendar from '../components/shared/calendar';
import CustomDrawer from './drawerContent'
import StudentAttendance from '../components/studentsrecords/attendance'
import App from '../../App'
import StudentProfile from '../components/studentsrecords/studentProfile'
// import Login from '../components/Authentication/login'
// import EventsPick from '../screens/datetimepicker';

import AddEvents from '../components/shared/addedevents'
const TabStack=createBottomTabNavigator(
    {
        StudentInterFace:{
            screen:StudentInterFace,
            navigationOptions:{
                tabBarIcon:()=><FontAwesome name="home" size={30} color="#005cb4"  />

            }
        },
        AddedEvents:{
            screen:AddEvents,
            navigationOptions:{
                tabBarIcon:()=><FontAwesome name="address-card-o" size={30} color="#005cb4"  />

            }
        },
        Calendar:{
            screen:StudentCalendar,
            navigationOptions:{
                tabBarIcon:()=><FontAwesome name="calendar" size={30} color="#005cb4"  />

            }
        },
        // Homework:{
        //     screen:Calendar,
        // },  
    },
    {
    tabBarOptions:{
        showLabel:false
    }
}
)
const RootDrawNavigator=createDrawerNavigator({
    TabStack:{
        screen:TabStack,
         navigationOptions: {
            drawerLabel: () => null
    },
        

        
     },
    
     StudentInterFace:{
         screen:StudentInterFace,
     },
     Calendar:{
        screen:StudentCalendar,
    }, 

    // Logout:{
    //     screen:Login
    // },

    AddedEvents:{
        screen:AddEvents,
    },
    Profile:{
        screen:StudentProfile,
    }, 
    StudentAttendance:{
        screen:StudentAttendance,
        navigationOptions: {
            drawerLabel: () => null
    },
    }
   
  
  
},{
    contentComponent:props=><CustomDrawer {...props} />
})



export default createAppContainer(RootDrawNavigator);