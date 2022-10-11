import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';

import SafeViewAndroid from "./components/SafeViewAndroid";
import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';

function Home() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            {/* Header */}
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

            {/* Search Bar */}
            <View className="flex-row items-center space-x-2s pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-1">
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput placeholder='Restaurants or cuisines' keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{ paddingBottom: 100 }}
            >

                <Categories />

                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="Paid placement from our partners"
                />

                {/* <FeaturedRow
                    id="2"
                    title="Tasty Discounts"
                    description="Everyone's been enjoying this tasty Discounts"
                />
                <FeaturedRow
                    id="3"
                    title="Offers near you !"
                    description="Why not suppot your local restaurant tonight ! "
                /> */}

            </ScrollView>

        </ SafeAreaView >
    );
}

export default Home;