import React,{useState, useEffect} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image,TouchableOpacity,Button,TextInput,FlatList,ScrollView} from 'react-native';
import { database} from 'firebase';
import * as firebase from 'firebase';
import * as ImagePicker  from 'expo-image-picker';



export default function StudentProfile() {
    const [profileUpdate, setprofileUpdate] = useState({
    })
    const [creativitydata, setcreativitydata] = useState();
    const [userCreativity, setuserCreativity] = useState({});
    const [editingProfile, seteditingProfile] = useState(true)

    // for saving data from user
    const saveProfile=()=>{
        var name=profileUpdate.name;
        var username=profileUpdate.username
        if(name!==''){
            database().ref('userLoginInfo').child(profileUpdate.userId).child('name').set(name);
        }
        if(username!==''){
            database().ref('userLoginInfo').child(profileUpdate.userId).child('username').set(username);
        }
        seteditingProfile(true);

    }

    // calling the user data at first worked as component did mount
    useEffect(() =>{
        console.log('hello');
        firebase.auth().onAuthStateChanged(function(userInfo) {
            if(userInfo) {
               fetchUserInfo(userInfo.uid);
               feedUserCreativity(userInfo.uid);
            }
            else {
               alert('error');
            }
            })
    }, []);
feedUserCreativity=(userId)=>{
    database().ref('userCreativity').child('Creativity'+profileUpdate.userId).once('value').then(function(snapshot) {
        const exists = (snapshot.val() !== null);
        if(exists) {
            var exactdata=[];
            var data = snapshot.val();
            var keys=Object.keys(data)
            
            for(var i=0;i<keys.length;i++){
                  exactdata.push(data[keys[i]]);
                //   console.log(exactdata);
                
                
            }
            // console.log('exactdata');

            setcreativitydata(exactdata);
            
            
        }else{
            console.log('no data');
        }
    }).catch(error => console.log(error));

}

// added to flatlist to display
//   const addToFlatList=(data)=>{
//       set

//   }


    
    // fetching data from database firebase
    const fetchUserInfo = (userId) => {
        database().ref('userLoginInfo').child(userId).once('value').then(function(snapshot) {
                 
            var data = snapshot.val();
            

                setprofileUpdate({
                    username: data.username,
                    name: data.name,
                    profilephoto: data.profilephoto,
                   
                    userId: userId


                });
              
        });
    }
    var upload=async(check)=>{
       
        let result=await ImagePicker.launchCameraAsync();
        //let result=await ImagePicker.launchImageLibraryAsync()
       if(result.cancelled){
           console.log('cancelled image')
       }else if(result.error){
           alert('ImagePicker Error',resut.error)
       }else{
        // setprofileUpdate({...profileUpdate,profilephoto:result.uri});
        // firebase.database().ref('userLoginInfo').child(profileUpdate.userId).child('profilephoto').set(result.uri);
        // console.log(result.uri)
        if(check=='check'){
            uploadImage(result.uri,profileUpdate.userId)
            .then(()=>{
                alert('uploaded successfully');
            })
        .catch((error)=>{
                  console.log('error came',error.message);
        });

        }else{
            addCreativity(result.uri)
            .then(()=>{
                alert('Added Creativity successfully');
            })
         .catch((error)=>{
                  console.log('error',error.message);
        });
        }
        
       
       

       }
           
    //       
    //        
    //    }
  
  
    }
   const uploadImage=async(uri,imageName)=>{
    var userId=firebase.auth().currentUser.uid;

        // alert('welcome to this project')
        const response=await fetch(uri)
       
        const blob=await response.blob(); 
         var uploadTask=firebase.storage().ref('userLoginInfo').child(profileUpdate.userId).put(blob);
        
   

        uploadTask.on('state_changed', function(snapshot) {
         
            var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
            console.log('Upload is '+progress+'% complete');
            // that.setState({
            //     progress: progress,
            // })
        }, function(error) {
            console.log('error with upload' +error);
        }, function() {
            //complete
            // that.setState({ progress: 100});
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                database().ref('userLoginInfo').child(profileUpdate.userId).child('profilephoto').set(downloadURL);
                setprofileUpdate({...profileUpdate,profilephoto:downloadURL});
                
                // that.processUpload(downloadURL);
            });
        });
    }
    
    // adding creativity of students
    const addCreativity=async(uri)=>{
        

        
        const response=await fetch(uri);

       
        const blob=await response.blob(); 
        // for unique id
        
         var uploadTask=firebase.storage().ref('userCreativity').child('Creativity'+profileUpdate.userId).child('Creativity'+Math.floor(Math.random() * 10) + 1 ).put(blob);
         uploadTask.on('state_changed', function(snapshot) {
         
            var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
            console.log('Upload is '+progress+'% complete');
            // that.setState({
            //     progress: progress,
            // })
        }, function(error) {
            console.log('error with upload' +error);
        }, function() {
            //complete
            // that.setState({ progress: 100});
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                var userCreativity = {
                    author: profileUpdate.userId,
                    caption:'i am a very good programmer and i love programming',
                    url:downloadURL,
                   
                }
                database().ref('userCreativity').child('Creativity'+profileUpdate.userId).child('Creativity'+Math.floor(Math.random() * 10) + 1).set(userCreativity);
                
              
            });
        });
          
           }
    
    
  return editingProfile?(
      <ScrollView style={{flex:1}}>
      
   
     
 
    <View style={{ flex: 1}}>
    
    <View style={{ height: 65, paddingTop:10, backgroundColor: 'white', borderColor: 'lightgrey',  justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5}} >
        <Text style={{marginBottom:'2%', fontStyle: 'italic', backgroundColor: 'white', fontWeight: 'bold', fontSize: 28}}>Profile</Text>
    </View>


    <View style={{ marginBottom:'2%', backgroundColor: 'white', justifyContent: 'space-evenly',padding:10, alignItems: 'center', flexDirection: 'row', paddingVertical: 10}}>
        <Image source={{ uri: profileUpdate.profilephoto }}
        style={{marginLeft: 10, height: 100, width: 100, borderRadius: 50}}
        />

    <View style={{ paddingLeft: '4%'}}>
        <Text style={{ fontSize: 20, fontStyle: 'italic'}}>Name : {profileUpdate.name}</Text>
        
        <Text style={{ fontSize: 20, fontStyle: 'italic'}}>UserName : {profileUpdate.username}</Text>
        
    </View>

    </View>
   



    <View style={{backgroundColor:'white', paddingBottom: 20, flexDirection: 'row', alignItems:'center', justifyContent:'space-evenly', paddingTop: '2%'}}>
      
        <TouchableOpacity 
            onPress={() =>seteditingProfile(false)}
            
            >
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        
       
        <Text style={{ textAlign: 'center', color: 'black'}}>Edit Profile</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>upload('check')}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
         
            <Text style={{ textAlign: 'center', color: 'black'}}>Change Profile Picture</Text>
            </View>
        </TouchableOpacity>
        
      
    </View>
    <View style={{backgroundColor:'blue',padding:10,height:40}}>
        <TouchableOpacity onPress={()=>upload('notcheck')}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
         
            <Text style={{ textAlign: 'center', color: 'white',fontWeight:'bold',fontSize:15}}>Add Creativity</Text>
            </View>
        </TouchableOpacity>
        
    
        </View>
        <View>

        <FlatList 
            data={creativitydata}
            renderItem={({item})=>(
            <View>
            <Text>{item.caption}hello</Text>
            
            <Image source={{uri:item.url}} style={{height:270,width:'70%',marginLeft:40,borderBottomWidth:4,borderColor:'blue'}}/>

            </View>
            
            
             )
             }
             keyExtractor={item => item.url}
            

        /> 
        {/* <Text>Enter Caption</Text>
        
            <TextInput 
                 editable={true}
                 placeholder={'Enter caption'}  
                 onChangeText={(caption) => setuserCreativity({...caption, caption:caption})}
                 value={userCreativity.caption}
                style={{ width: 250, marginVertical: 10, padding: 5, borderColor: 'grey', borderWidth: 1}}
            /> */}
        </View>

</View> 

</ScrollView>

  
):(
  
    <SafeAreaView style={{justifyContent:'center',flex:1}}>
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Update Profile</Text>
        <View style={{marginLeft:120}}>
        <Image source={{ uri: profileUpdate.profilephoto }}
        style={{height: 100, width: 100, borderRadius: 50,marginRight:10}}
        />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                          
                            <Text>Name</Text>
                            <TextInput 
                                editable={true}
                                placeholder={'Enter your name'}
                                onChangeText={(name) => setprofileUpdate({...profileUpdate, name: name})}
                                value={profileUpdate.name}
                                style={{ width: 250, marginVertical: 10, padding: 5, borderColor: 'grey', borderWidth: 1}}
                            />
                            <Text>Username</Text>
                            <TextInput 
                                editable={true}
                                placeholder={'Enter your username'}
                                onChangeText={(text) => setprofileUpdate({...profileUpdate,username: text})}
                                value={profileUpdate.username}
                                style={{ width: 250, marginVertical: 10, padding: 5, borderColor: 'grey', borderWidth: 1}}
                            />
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                                onPress={() => saveProfile()}>
                                <View>
                                <Text style={{backgroundColor: 'blue', color: 'white',padding: 10, fontWeight: 'bold'}}> Save Changes</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>seteditingProfile(true)}>
                                <View>
                                <Text style={{backgroundColor: 'yellow', color: 'black',padding: 10, fontWeight: 'bold'}}>Cancel Editing</Text>

                                </View>
                            </TouchableOpacity>

                            </View>
                            <View>

                            </View>
                           
                        </View>

       

      </SafeAreaView> 
    

 
  
)
  
}
