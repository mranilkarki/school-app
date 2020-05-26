import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,Button,FlatList} from 'react-native';


import moment from 'moment';
import firebase from 'firebase';
import { DispalySchoolEvents } from '../../redux/reducers/dbfunction'
import { useSelector,useDispatch } from 'react-redux';



 function AddEvents(){
    const EventsState= useSelector(state=>state.AddSchoolEventsManage);
    const dispatch=useDispatch()
    var x=EventsState;
  
   let y=(Object.keys(x))
 if(Object.keys(x)){
return(
       
            
            <View>
             <Text style={styles.title}>Notices & Events</Text>
           
           
            <FlatList
                data={Object.keys(x)}
                renderItem={({ item }) => (
                <View style={{flexDirection:'row',margin:7,borderRadius:'4'}}>
                    <View style={styles.noticeDate}>
                    {/* {x[item].eventDate} */}
                        <Text style={styles.title}>{(x[item].eventDate).split(' ')[0]}</Text>
                        <Text>{(x[item].eventDate).split(' ')[1]}</Text>
                        <Text>{(x[item].eventDate).split(' ')[2]}</Text>

                    </View>
                    <View style={styles.noticeContent}>
                        <Text style={styles.title}>{x[item].eventTitle}</Text>
                        <Text >{x[item].events}</Text>
                            
                        
                    </View>

                 </View>  
        )}
       
      />
       <Button title='show events' onPress={()=>dispatch(DispalySchoolEvents())}/>
               
           
                
                
                
            
             </View>                                  
 )
                }else{
                    return null
                }
}


   export default AddEvents;

   




            
    


const styles=StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:17,
    },
    noticeDate:{
        width:'20%',
        padding:5,
        backgroundColor:'red',
        
        alignItems:'center'
    },
    noticeContent:{
        width:'79%',
        // backgroundColor:'blue',
        padding:5,
    }
})

