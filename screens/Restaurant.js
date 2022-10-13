import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon, } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';

import { urlFor } from '../sanity';
import DishRow from "../components/DishRow";

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
            <View className="bg-white">
                <View className="px-4 pt-4 ">
                    <Text className="font-bold text-3xl">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" size={22} opacity={0.5} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text>  •  {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon color="gray" size={22} opacity={0.4} />
                            <Text className="text-xs text-gray-500">Nearby  •  {address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color="#0CB" />
                </TouchableOpacity>
            </View>
            <View>
                <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                    Menu
                </Text>

                {dishes.map(dish => (
                    <DishRow
                        key={dish.id}
                        id={dish.id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image}
                    />
                ))}

            </View>
        </ScrollView>
    )
}

export default Restaurant