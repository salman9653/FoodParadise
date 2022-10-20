import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';

import SafeViewAndroid from "../components/SafeViewAndroid";
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { urlFor } from '../sanity';
import { removeFromBasket, selectBasketTotal } from '../features/basketSlice';



const Basket = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const dispatch = useDispatch()
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)

    const [groupedItemsInBaket, setGroupedItemsInBaket] = useState([])
    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBaket(groupedItems);
    }, [items])

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#0CB] bg-white shadow-sm">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">
                            {restaurant.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon color="#0CB" height={50} width={50} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-4">
                    <Image
                        source={require('../assets/delivery-bike.png')}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1 font-semibold">Diliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#0CB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {Object.entries(groupedItemsInBaket).map(([key, items]) => (
                        <View
                            key={key}
                            className="flex-row items-center space-x-3 bg-white py-2 px-5"
                        >
                            <Text className="text-[#0CB]">{items.length} x</Text>
                            <Image
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">₹ {items[0].price}</Text>
                            <TouchableOpacity>
                                <Text
                                    className="text-[#0CB] text-xs"
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">₹ {basketTotal}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Dilivery Fee</Text>
                        <Text className="text-gray-400">₹ {~~(basketTotal / 50)}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text>Oder Total</Text>
                        <Text className="font-extrabold">₹ {basketTotal + (~~(basketTotal / 50))}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PreparingOrder')} className="rounded-lg bg-[#0CB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Basket