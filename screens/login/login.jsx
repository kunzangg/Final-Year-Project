import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Card from '../../components/card';


const Login = () => {
  return ( 
    <View
    >
   <ImageBackground
    source={require('../../assets/pet.png')}
    resizeMode='cover'
    style={
      {
        height:800,
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end"
      }
    }
   >
    <Card
        title="Hey! Welcome"
        description="While you sit and stay - we'll go out and play." 
        
      />
    
   </ImageBackground>
    
   </View>
   
  );
};

export default Login;