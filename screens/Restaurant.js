import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

import SafeViewAndroid from "../components/SafeViewAndroid";
import { urlFor } from '../sanity';

const Restaurant = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const { params: {
        id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
    } } = useRoute();

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{ uri: urlFor(imgUrl).url() }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full"
                >
                    <ChevronLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </ScrollView>
    )
}

export default Restaurant