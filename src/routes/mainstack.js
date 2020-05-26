import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../components/Authentication/login'
import SignUp from '../components/Authentication/signup'
import StudentInterFace from '../components/studentsrecords/StudentInterface'

const MainStack=createStackNavigator({
    
    Login:{screen:Login},
    StudentInterFace:{screen:StudentInterFace},
    SignUp:{screen:SignUp},
   
},
{
    initialRouteName:'Login',
    mode:'modal',
    headerMode:'none',
}
)

export default createAppContainer(MainStack);
