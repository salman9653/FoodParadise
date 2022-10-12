import { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';

import SafeViewAndroid from "../components/SafeViewAndroid";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

function Home() {

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->
          }
          }`).then(data => {
            setFeaturedCategories(data);
        });
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
                <View className="flex-row flex-1 mr-1 space-x-2 bg-gray-200 px-2 py-1 items-center">
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

                {featuredCategories?.map(category => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}

            </ScrollView>

        </ SafeAreaView >
    );
}

export default Home;