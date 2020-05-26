import React,{useState} from 'react';
import { StyleSheet, View,FlatList,Modal, Text, Button, TouchableOpacity, TextInput } from 'react-native';
// import Add from '../components/db';
import Header from '../shared/header';
import firebase from 'firebase';

import {AddStudentRecords} from '../reducers/dbfunction'
import { blue } from 'color-name';

 export default function Home(props) {
  console.disableYellowBox = true;

  
   
  

 const[modalVisible, setmodalVisible]=useState(false);
//  for id
 var [id,setid]=useState('');
 
 var idhandler = (valid) => {
   setid(valid);

  
 };

  return (
    <View style={styles.container}>
     <Modal
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
      
        
      >
       <Button title="Close" onPress={()=>{setmodalVisible(!modalVisible)}}/>
      <View style={styles.modal}>
          <Text>Good Morning! Please Enter your ID No:</Text>
          <TextInput style={styles.input} placeholder='ID No:' onChangeText={idhandler} value={id}  keyboardType={'numeric'}/>
          <Button title="Login With ID" onPress={()=>{props.navigation.navigate('StudentDetails',{id:id});setmodalVisible(!modalVisible)}}/>

          </View>
      </Modal>
  
      <Header/>
     

           

      <Button title="Login" onPress={()=>setmodalVisible(!modalVisible)} style={styles.submit}/>
     
      
     
      <View>
      

      </View>
    
    </View>

  );

}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',

  },
  modal:{
 
    height:650,
    width:360,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems: 'center',
  },
  input:{
    borderWidth:1,
    borderRadius:10,
    padding:8,
    margin:10,
    width:200,
  },
    lists:{
      flexDirection:'row',
      padding:8,
      
    },
    adjust:{
      marginRight:10,

    },
});
// const mapStateToProps=(state)=> {
//   console.log('hello wthis is event')
//  console.log(state);
//   return {
//      name:state.DatabaseManage.name,
//      age:state.DatabaseManage.age,
//      gender:state.DatabaseManage.gender,
  
   
//   }
  
// }


// const mapDispatchToProps=(dispatch)=>{
//   return {
//       submit: () => dispatch(AddStudentRecords()),
//       displaydata:(id)=>dispatch(DispalyStudentBio(id))
      
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Home);
 

export const images=
{
  nameimg:
    {
      'Anil Karki': require('../images/anil.jpg'),
    }
}