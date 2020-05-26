import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Keyboard,Button,SafeAreaView,FlatList } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


 

export default function StudentAttendance(props){
  
    const [presentColor,setpresentColor]=useState({
      style:{
        backgroundColor:'blue',
      },
      absent:{
        backgroundColor:'blue'
      },
      excused:{
        backgroundColor:'blue'

      }
    });

   
    
  


    
    var x = ['a'];

    const changePresentColor=(item)=>{
        x.push(item);
        console.log(x);
 
  
      setpresentColor({ style:{
       backgroundColor:'green',
        padding:5,
     }})
    }
   
     const changeAbsentColor=(item)=>{
      console.log(item); 
      setpresentColor({ absent:{
        backgroundColor:'red',
        padding:5,
      }})
     }
     const changeExcusedColor=(item)=>{
      console.log(item);
      setpresentColor({ excused:{
       backgroundColor:'yellow',
       padding:5,
     }})
    }
   const data=['Anil Karki','Pemba Sherpa','Safal Karki']
 var id=1;
  return(
    <SafeAreaView style={{flex:1}}>
     
     
    <FlatList
        data={data}
        renderItem={({ item }) =>
        <View style={styles.card}>
            <View style={styles.cardContent}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{id++}.&nbsp;&nbsp;{item}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <TouchableOpacity onPress={()=>{changePresentColor({item})}}><Text style={presentColor.style}>Present</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{changeAbsentColor({item})}}><Text style={presentColor.absent}>Absent</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{changeExcusedColor({item})}}><Text style={presentColor.excused}>Excused</Text></TouchableOpacity>
          </View>
          
           </View>
          </View>
          
      
        }
    
     />
         
        
      
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
    },
    cardContent: {
      marginHorizontal: 18,
     
     
      // marginVertical: 20,
    },test:{
    }
  });