import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as progress from 'react-native-progress'

import SafeViewAndroid from "../components/SafeViewAndroid";
import { selectRestaurant } from '../features/restaurantSlice'

const Delivery = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)

    return (
        <View className="bg-[#0CB] flex-1">
            <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estamated Arrival</Text>
                            <Text className="text-4xl font-bold">40 - 45 min</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://links.papareact.com/fls' }}
                            className="h-20 w-20"
                        />
                    </View>
                    <progress.Bar size={30} color="#0CB" indeterminate={true} />
                    <Text className="mt-3 text-gray-500">
                        Your Order at {restaurant.title} is being prepared.
                    </Text>
                </View>
            </SafeAreaView>

        </View>
    )
}

export default Delivery