import React, { useState } from "react";
import { Button, View,Text,StyleSheet,TextInput } from "react-native";
import {DateTimePickerModal,DateTimePicker} from "react-native-modal-datetime-picker";
import moment from 'moment';
import StudentDetail from './StdDetails';
import AddEvents from './addedevents';
import Test from './test';
import {connect } from 'react-redux'
import { AddSchoolEvents } from '../reducers/dbfunction'


const EventsPick = (props) => {
  // for eventsDescription
  const [event,Setevent ]=useState('');

  
   
  var eventHandler = (valevent) => {
      Setevent(valevent);
      };
      // for event title
  const [eventTitle,SeteventTitle ]=useState('');
   
      var eventTitleHandler = (valevent) => {
          SeteventTitle(valevent);
          };
  // for date picker visibility
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showDate,SetshowDate ]=useState('');
  const SetDate=(date)=>{
      console.log(date);
    SetshowDate(moment(date).format('MMMM Do YYYY, h:mm:ss a'))
}
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log("A date has been picked: ", date);
    
    hideDatePicker();
    SetDate(date);
    
    
  };
  

  return (
    <View style={styles.container}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text>{showDate}</Text>
      <Text>ADD Events:</Text>
       <TextInput  style={styles.input} placeholder= "EventsTitle" onChangeText={eventTitleHandler} value={eventTitle} />
       <TextInput  style={styles.input} placeholder= "EventsDescription" onChangeText={eventHandler} value={event} />
        <Button title="Add Events" onPress={()=>{
          props.eventSubmit(showDate,eventTitle,event);
          props.navigation.navigate('AddEvents')}
         } />
       
       
      
        
      
      
      
      
    </View>
  );
};
const mapDispatchToProps=(dispatch)=>{
  return {
     eventSubmit: (showDate,eventTitle,event) => dispatch(AddSchoolEvents(showDate,eventTitle,event)),
      
      
  }
}
export default connect(null,mapDispatchToProps)(EventsPick);

const styles = StyleSheet.create({
    container: {
      marginTop:15,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
     
     
    }
})
