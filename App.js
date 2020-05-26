import React from 'react';

import AppNavigator from './src/routes/mainstack';
// import Home from './screens/home';
// import { createStore } from 'redux'
import LoginStore from './src/redux/store'
import { Provider } from 'react-redux'


export default function App() {
   
    return(
   
   <Provider store={LoginStore}>
        <AppNavigator />
      </Provider>
      

  
      )
    }
       
  





// const styles = StyleSheet.create({
//   container: {
//     marginTop:15,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
   
   
//   },
//   containe: {
   
//     flex: 1,
    
   
   
//   },
//   loginbody:{
//     marginTop:100,
//     flexDirection:"column",
//     alignItems: 'center',
//   },
//   input:{
//     borderWidth:1,
//     borderRadius:10,
//     padding:8,
//     margin:10,
//     width:200,
//   },
//   submit:{
//     width:350,
//     backfaceVisibility:"hidden",
//     borderRadius:5,

//   }
// });
