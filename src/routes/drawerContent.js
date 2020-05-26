import React from 'react';
import {View,Text,ScrollView,SafeAreaView,ImageBackground,Image, StyleSheet,TouchableOpacity} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {signOut} from '../redux/actions'
import { useDispatch } from 'react-redux';

export default function CustomDrawer(props){
    const dispatch=useDispatch()
    return(
        <SafeAreaView>
        <ScrollView>
        <View>
            <View style={styles.profileback}>
                <Image source={require('../images/anil.jpg')} style={styles.profile}/>
                <View>
                    <Text style={styles.name}>Anil Karki</Text>
                    <Text style={[styles.name,{marginTop:0}]}>Grade : 10</Text>
                </View>
            </View>
            <View>
                <DrawerNavigatorItems  {...props}/>
                <TouchableOpacity style={{flex:1,backgroundColor:'blue'}} onPress={()=>dispatch(signOut())}>
                    <Text style={{padding:10,color:'white'}}>Logout</Text>

                </TouchableOpacity>
                
                
            </View>
      
                
               
               
           
            </View>
           
       
        </ScrollView>
        </SafeAreaView>
       
    )
}
 const styles = StyleSheet.create({
     profileback:{
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: '#005cb4',
        height:115,
        padding:10,
        
         
      
        
         
     },
     profile:{
         borderRadius:120,
         height:100,
         width:100,
        
        
         
     },
     name:{
         flexDirection:'row',
         color:'#fff',
         fontWeight:'bold',
         
         marginTop:30,
         marginLeft:15,
         backgroundColor: '#005cb4',
         fontSize:20
     }

 
    })