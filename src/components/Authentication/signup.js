import React,{useState,useEffect} from 'react'
import {View,Text,ActivityIndicator,TouchableOpacity,TextInput,StyleSheet,TouchableWithoutFeedback,ImageBackground} from 'react-native'
import {auth} from 'firebase';
import * as firebase from 'firebase'
import Firebase from '../../../config/config'
// const ref = firebase.storage().ref('user/user.png');
// const url = await ref.getDownloadURL();

export default function SignUp(props){

     const[email,Setemail]=useState('')
     const[password,Setpassword]=useState('')
     const[loading,setLoading]=useState(false)

  const createUserInfo=(userInfo,email)=>{
    // console.log(userInfo,email,userInfo.uid);
    var userInfoObject={
      name:'Enter Name',
      username:'@name',
      email:email,
      profilephoto:'https://firebasestorage.googleapis.com/v0/b/login-32abc.appspot.com/o/user%2Fuser.png?alt=media&token=1c28101b-b31c-4029-8e50-36c0a8bb5f90',
    }
    firebase.database().ref('userLoginInfo').child(userInfo.uid).set(userInfoObject);

  }
  const signup=async(email,password)=>{
      if(email.length<=0 && password.length<=0){
        alert('Email or Password is empty')
      }
     else if(password.length<=6){
        alert('password must be at least six characters')
      }else{
        try{
          setLoading(true)

          await auth().createUserWithEmailAndPassword(email,password)
          .then((userInfo) => {
            createUserInfo(userInfo.user,email)
            
          }
          )
          
          .then(()=>{
           
            setLoading(false);
            alert('account created you can Login now.');
          props.navigation.goBack()}

          )


        }catch(error){
          console.log(error)
        }
      }
      
      
  }
  if(loading){
    return(<ActivityIndicator size="large" color="#0000ff" />)
  }
     return(
         <View style={styles.container}>
            <Text style={styles.label}>Email/UserName: </Text>
         <TextInput  
         style={styles.input} 
         placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            KeyboardAvoidingView
            keyboardType={"email-address"}
            editable={true}
            value={email}
            onChangeText={(valemail)=>Setemail(valemail)}

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
    
     <TouchableOpacity onPress={()=>signup(email,password)} style={styles.signupbtn}>
        <Text style={styles.title}>Create Account</Text>
     </TouchableOpacity>
         </View>

      )
     }
        
  

 const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  title:{
    fontSize:25,
    color:'blue',
    padding:20,
    textDecorationLine: 'underline',
  },
   input:{
      borderColor:'blue',
      borderWidth: 1,
     width:'50%',
     borderRadius:10,
     height: '7%',
    

   },
   label:{
    fontSize:20,
    padding:5,
   },
   image:{
    
    resizeMode: "cover",

   }

 
})
