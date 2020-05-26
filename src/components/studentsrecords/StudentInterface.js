 import React,{useState,useEffect,useReducer} from 'react';
 import {StyleSheet,View,Text,Image,Button,SafeAreaView,TouchableOpacity, Alert,ActivityIndicator, ImageComponent} from 'react-native';
 import {auth} from 'firebase';
 import AddEvents from '../shared/addedevents';
 import Calendar from '../shared/calendar';
import { DispalyStudentBio, AddStudentRecords} from '../../redux/reducers/dbfunction'
 import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
 

 
function StudentInterFace({navigation}){
    const LoginState= useSelector(state=>state.Authentication.logginIn);
    const dispatch=useDispatch();


   const [studentData, setstudentData] = useState([]);
   const [photo, setphoto] = useState('');
   const[loading,setLoading]=useState(true)
   
       
  
  
      
  //  const getPermissionAsync = async () => {
  //   if (Constants.platform.ios) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera roll permissions to make this work!');
  //     }
  //   }
  // };
  // const uploadImage = async () => {
  //   try {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
        
  //       aspect: [4, 3],
  //       quality: 1,
  //     });
  //     if (!result.cancelled) {
  //         console.log('result',result);
  //         setphoto(result.uri);
  //       // this.setState({ image: result.uri });
  //     }

     
  //   } catch (E) {
  //     console.log(E);
  //   }
  // };

  //      useEffect(() => {   
  //       getPermissionAsync();//for react native imageuploading getting permission
  //       const fetchStudentData=async()=>{
  //           const data= await displaydata('001'); 
  //           if(data){
              

  //             // console.log(data);
  //             setLoading(false);

  //           }else{
              
  //            setLoading(true);
  //           }
           
            
            


  //       }  
  //       fetchStudentData();
       
  // },[]);
  
       
      
    //    {/* <Button title="image uploader" onPress={()=>chooseImage()} style={styles.submit}/> */}
     
    
    return !loading?(
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <ActivityIndicator size="large" color="red" />
      </View>

    ):(
 <SafeAreaView style={styles.container}>  

 <View >
 
   
  
    <View>
    <View style={{height: 60, backgroundColor: '#005Cb4'}}>
        <TouchableOpacity onPress={navigation.openDrawer}>
             <FontAwesome name="bars" size={30} color="#fff" style={{padding:10,marginTop:20,}} />
        </TouchableOpacity>
    </View>
    <View>
             </View>
          
       <View style={{flexDirection:'column',padding:5,width:'100%' }}>
          {/* <View>
          <Button title="choose iMAGE" onPress={()=>uploadImage()}/>
       
              <Image style={styles.logo} source={{uri:photo}}/>
          </View> */}
          {/* <View style={{marginTop:30,left:20}}>
              <Text style={styles.info}>Name: {name}</Text>
              <Text style={styles.info}>Age: {age}</Text>
              <Text style={styles.info}> Gender:{gender}</Text>
          </View> */}
                      
                     
      </View>
       <View style={{flexDirection:'row' }}>
          <View style={{padding:15,margin:5, width:'47%',alignItems:'center',backgroundColor:'orange',alignContent:'space-around' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('StudentAttendance')}>
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
          <TouchableOpacity onPress={()=>navigation.navigate('Calendar')}>
          <FontAwesome name="calendar" size={60} color="black" />
          <Text>Calendar</Text>
          </TouchableOpacity>
         </View>
    
          <View style={{padding:15,margin:5,backgroundColor:'yellow', width:'47%',alignItems:'center' }}>
          <FontAwesome name="user" size={60} color="black" />
          <Text>My Teachers</Text>
                           
        
             </View>
           
                           
                          
      </View> 
       <AddEvents /> 
      
     </View>
   
    </View>
    
</SafeAreaView> 
    
                
                 
         )
 }

//  const mapStateToProps=(state)=> {
//       const propsdata={
//         name:state.DatabaseManage.name,
//         age:state.DatabaseManage.age,
//         gender:state.DatabaseManage.gender,
//         photo:state.DatabaseManage.photo

//       }
//       return propsdata;
      
    
     
    
    
//   }
  
  
  // const mapDispatchToProps=(dispatch)=>{
  //   return {
  //      submit: () => dispatch(AddStudentRecords()),
  //      signOut: () => dispatch(signOut()),
  //       displaydata:async(id)=>dispatch(DispalyStudentBio(id))
        
  //   }
  // }
  export default StudentInterFace;
 
  
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
// import {Home,images} from './home';

// import Header from '../shared/header'
// import { FontAwesome } from '@expo/vector-icons';

// import * as ImagePicker  from 'expo-image-picker';
// import * as firebase from 'firebase';



//  function StudentDetail({
//    var id=navigation.getParam('id')
//    console.disableYellowBox = true;
//    var photo=photo;
//     // const img=navigation.getParam('name')

//    } );
//   var chooseImage=async()=>{
//       let result=await ImagePicker.launchCameraAsync();
//       //let result=await ImagePicker.launchImageLibraryAsync()
//      if(!result.cancelled){
//          uploadImage(result.url,'id-photo')
//          .then(()=>{
//              Alert.alert('uploaded successfully');
//          })
//          .catch((error)=>{
//              Alert.alert('error',error.message);
//          })
//      }


//   }
//  var uploadImage=async(url,imageName)=>{
//       const response=await fetch(url);
//       const blob=await response.blob();
//       var ref=firebase.storage().ref().child('images/'+imageName);
//       return ref.put(blob);
//   }
//     return(
//        
// }



