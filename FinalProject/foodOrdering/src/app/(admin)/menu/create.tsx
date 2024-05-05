
import Buttom  from '@components/Button';

import {  Text, View,StyleSheet,TextInput,Image  } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { Stack } from 'expo-router';
const CrreateProductScreen =() => {
    const [name,setName] =useState('');
    const [price,setPrice] =useState('');
    const [erorrs,setErorrs] =useState('');
    const [image, setImage] = useState<string |null>(null);


    const resetFielde =() => {
        
        setName('');
        setPrice('');
    };
    const validateInput =() => {
        setErorrs('');
        if(!name){
            setErorrs('Name is required');
            return false;
        }
        if(!price){
            setErorrs('price is required');
            return false;
        }
        if(isNaN(parseFloat(price))){
            setErorrs('price is required');
            return false;
        }
        return true;
    };
    const onCreate=() => {
        if (!validateInput()){
            return;
        }
        console.warn('Creating pruduct : ' , name);
        resetFielde();
    };
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    return (
<View style={styles.container}>
       <Stack.Screen options={{title :'Create Product'}}/>
    <Image   source={{uri: image||defaultPizzaImage}} style={styles.image}/>
    <Text onPress={pickImage} style ={styles.textButton}>Select Image</Text>
    <Text style ={styles.label}> Name</Text>
    <TextInput
    value='name'
    onChangeText={setName}
     placeholder="Name"  
     style ={styles.input}
     />
    <Text style ={styles.label}> price ($)</Text>
    <TextInput
    value='price'
    onChangeText={setPrice}
    placeholder="9.99"  style ={styles.input} 
    keyboardType="numeric" />
    <Text style ={{ color:'red'}}>
        {erorrs}
    </Text>
    <Buttom  onPress={onCreate }  text ='create' />
</View>
    );
};
const styles =StyleSheet.create({
    container:{
        flex: 1,
   justifyContent:'center',
   padding:10,
    },
    image :{
        width:'50%',
        aspectRatio:1,
        alignSelf: 'center',

    },
    textButton :{
        alignSelf: 'center',
        fontWeight : 'bold',
        color :Colors.light.tint,
        marginVertical :10,


    },
    input :{
        backgroundColor :'white',
        padding : 10,
        borderRadius:6,
        marginTop :6,
        marginBottom : 20,

    },
    label :{
        color:'grey',
        fontSize :16,
    },

})

export default CrreateProductScreen