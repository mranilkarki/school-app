import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,Image,Button, TouchableOpacity, Alert} from 'react-native';
import {Home,images} from './home';

import Header from '../shared/header'
import { FontAwesome } from '@expo/vector-icons';
import AddEvents from './addedevents';
import {connect } from 'react-redux'
import { DispalyStudentBio, AddStudentRecords} from '../reducers/dbfunction'
import { HeaderStyleInterpolators } from 'react-navigation-stack';
import * as ImagePicker  from 'expo-image-picker';
import * as firebase from 'firebase';



 function StudentDetail(props){
   var id=props.navigation.getParam('id')
   console.disableYellowBox = true;
   var photo=props.photo;
//    const[studentinfo,setstudentinfo]=useSatat('')
    // const img=props.navigation.getParam('name')
   useEffect((id) => { 
       const displaydata=async()=>{
       await props.displaydata(id);
       } 
       displaydata();
   

   },[] );
  var chooseImage=async()=>{
      let result=await ImagePicker.launchCameraAsync();
      //let result=await ImagePicker.launchImageLibraryAsync()
     if(!result.cancelled){
         uploadImage(result.url,'id-photo')
         .then(()=>{
             Alert.alert('uploaded successfully');
         })
         .catch((error)=>{
             Alert.alert('error',error.message);
         })
     }


  }
 var uploadImage=async(url,imageName)=>{
      const response=await fetch(url);
      const blob=await response.blob();
      var ref=firebase.storage().ref().child('images/'+imageName);
      return ref.put(blob);
  }
  if(!props.displaydata){
      return 'hello world'
  }
    return(
        <View style={styles.container}>

            <Header/>
               <Button title="image uploader" onPress={()=>chooseImage()} style={styles.submit}/>
            {/* <Button title="Login" onPress={()=>props.submit()} style={styles.submit}/> */}
           
            <View style={{flexDirection:'row',padding:5 }}>
                <View>
                    <Image style={styles.logo} source={require('../images/anil.jpg')}/>
                </View>
                <View style={{marginTop:30,left:20}}>
                    <Text style={styles.info}>Name: {props.name}</Text>
                    <Text style={styles.info}>Age: {props.age}</Text>
                    <Text style={styles.info}> Gender:{props.gender}</Text>
                </View>
              
             
            </View>
             <View style={{flexDirection:'row' }}>
                <View style={{padding:15,margin:5, width:'47%',alignItems:'center',backgroundColor:'orange',alignContent:'space-around' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Attendance')}>
                    <FontAwesome name="address-card-o" size={60} color="black" />
                    <Text>My Attendance</Text>
                </TouchableOpacity>

                </View>
                <View style={{padding:15,margin:5,backgroundColor:'red', width:'47%',alignItems:'center',alignContent:'space-around' }}>
                    <FontAwesome name="book" size={60} color="black" />
                    <Text>Homework</Text>

                </View>
                   
                  
            </View>
            <View style={{flexDirection:'row',padding:2 }}>
                <View style={{padding:15,margin:5, width:'47%',alignItems:'center',backgroundColor:'green' }}>
                <FontAwesome name="calendar" size={60} color="black" />
                <Text>Calendar</Text>

                </View>
                <View style={{padding:15,margin:5,backgroundColor:'yellow', width:'47%',alignItems:'center' }}>
                <FontAwesome name="user" size={60} color="black" />
                <Text>My Teachers</Text>
                   

                   </View>
                   
                  
            </View> 
             <AddEvents />
        
        </View>
    )
}
const mapStateToProps=(state)=> {
   
   console.log(state);
    return {
       name:state.DatabaseManage.name,
       age:state.DatabaseManage.age,
       gender:state.DatabaseManage.gender,
       photo:state.DatabaseManage.photo
    
     
    }
    
  }
  
  
  const mapDispatchToProps=(dispatch)=>{
    return {
       submit: () => dispatch(AddStudentRecords()),
        displaydata:async(id)=>dispatch(DispalyStudentBio(id))
        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)( StudentDetail);
 
  
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
       
    },
    logo:{
        height:150,
        width:130
    },
    info:{
        marginBottom:10,
        fontWeight:'bold',
        
        fontSize:17
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
    },
   
})


