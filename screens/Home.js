import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, SafeAreaView } from 'react-native';
import SafeViewAndroid from "./components/SafeViewAndroid";

function Home() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View>
                <Image
                    source={require('../assets/delivery-bike.png')}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;