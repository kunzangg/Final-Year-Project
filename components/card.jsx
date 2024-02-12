import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';


const Card = ({ title, description }) => {
  return (
    <View style={tw`absolute pt-72 mb-12 left-0 right-0`}>
    <View style={tw`flex-1 shadow-lg rounded-3xl bg-gray-100 bg-opacity-75 p-24 mb-8 `}>
      <Text style={[tw`text-xl text-black font-bold`, { fontFamily: 'FredokaOne_400Regular' }]}>{title}</Text>
      <Text style={tw`text-sm text-gray-500`}>{description}</Text>
      <TouchableOpacity 
          style={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4`}
          onPress={() => {
            // Handle button press
          }}
        >
          <Text>Button</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

export default Card;
