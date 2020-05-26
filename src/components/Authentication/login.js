import React, { useState } from 'react';
import { StyleSheet,Picker, Text, View,ActivityIndicator,TextInput,TouchableOpacity,Keyboard,Button,TouchableWithoutFeedback } from 'react-native';
import {loginHandler} from '../../redux/actions'
// import {connect } from 'react-redux'
import LoginStore from '../../redux/store'
import Navigator from '../../routes/drawNavigation';

import { useSelector, useDispatch } from 'react-redux'
function Login(props) {
  console.disableYellowBox = true;
  const LoginState= useSelector(state=>state.Authentication.logginIn);
  const dispatch=useDispatch()
   var [email,setEmail]=useState('');
  
   var [password,Setpassword]=useState('');
   const[loading,setLoading]=useState(false)

   
   if(loading){
     return(<ActivityIndicator size="large" color="#0000ff" />)
   }
  //  if(props.loginIn){
  //   setLoading(false)z
  //  }
     
      if(!LoginState){
        
      return(
       
   
        <View style={styles.container}>
            <View style={styles.loginbody}>
            <Text style={styles.label}>Email/UserName: </Text>
            <TextInput  
               style={styles.input} 
               placeholder="Email/UserName"
              autoCapitalize="none"
              autoCorrect={false}
              KeyboardAvoidingView
              keyboardType={"email-address"}
              editable={true}
              value={email}
              onChangeText={(valemail)=>setEmail(valemail)}

            />
              <Text style={styles.label}>Password:</Text>
              <TextInput 
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                KeyboardAvoidingView
                editable={true}
                value={password}
                onChangeText={(text) => Setpassword(text)}
         />
          
          <TouchableOpacity onPress={()=>dispatch(loginHandler(email,password))} style={styles.loginbtn}>

          <Text>Login</Text>
          </TouchableOpacity>
            </View>
          <View style={{ alignItems: 'center',justifyContent:'center',top:'20%'}}>
            <Text >Dont Have An Account?</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
              <Text style={{textDecorationLine: 'underline',color:'#352377'}}>SignUp</Text>
            </TouchableOpacity>
        </View>
        </View>
      );
    }else{
      return(

        <Navigator />

   
        
      
        
      )
    }
  }

   

// const mapStateToProps=(state)=> {
 
//   return {
//       logginIn: state.Authentication.logginIn,
//       user:state.user,
      
//   }
  
// }
// const mapDispatchToProps=(dispatch)=>{
//   return {
//       submit: (email,password) => dispatch(loginHandler(email,password)),
      
//   }
// }

export default Login;
    const styles = StyleSheet.create({
      container: {
        
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
       
       
      },
      loginbody:{
        
        flexDirection:"column",
        alignItems: 'center',
      },
      label:{
        fontSize:20,
        padding:5,
       },
      input:{
        borderWidth:1,
        borderRadius:10,
        padding:8,
        margin:10,
        width:200,
      },
      loginbtn:{
        color:'white',
        
        padding:15,
        backgroundColor:'#352377',
        borderRadius:5,
    
      }
    });
    
     