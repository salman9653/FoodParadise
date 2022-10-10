import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, SafeAreaView, TextInput } from 'react-native';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline';

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

            <View className="flex-row pb-3 mt-2 items-center mx-4 space-x-2">
                <Image
                    source={require('../assets/delivery-bike.png')}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CC88" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>


            <View className="flex-row items-center space-x-2s pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <UserIcon size={20} color="gray" />
                    <TextInput placeholder='Restaurants or cuisines' keyboardType='default' />
                </View>
                <ChevronDownIcon color="#00CCBB" />
            </View>

        </ SafeAreaView>
    );
}

export default Home;