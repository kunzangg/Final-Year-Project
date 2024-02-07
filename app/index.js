import { Text, View } from 'react-native';
import SayHello from '../components/sayhello';

export default function Page() {
  return <View className=" w-full h-screen flex items-center justify-center">
    <Text
      className="text-4xl font-bold"
    >
      Hello,
    </Text>
        <SayHello />
    </View>
}
