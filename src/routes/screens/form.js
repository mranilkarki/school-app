import React from 'react';
import {StyleSheet,View,Text,Image,TextInput} from 'react-native';
import {FormLabel,FormInput,FormValidationMessage} from 'react-native-elements'

export default function Form(){

return(
<View>
<Text>Please fill up the form Correctly</Text>
    <FormLabel>Name</FormLabel>
    <TextInput />
  
</View>
);
}

