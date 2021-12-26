import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Platform, Button, Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Constants } from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

  const [image,setImage] =useState(null);

  useEffect(async() =>{
    if(Platform.OS !== 'web'){
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status !== 'granted'){
        alert('Permission denied!!')
      }
    }
  },[])

  const PickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })
    console.log(result)
    if(!result.cancelled){
      setImage(result.uri)
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Choose Image" onPress={PickImage}/>
      {image && <Image source={{uri:image}} style={{
        width:200,
        height:200
      }} />}
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
})
