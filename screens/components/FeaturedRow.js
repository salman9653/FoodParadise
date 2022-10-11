import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row justify-between px-4" >
                <Text className="font-bold text-lg" > {title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-5">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                <RestaurantCard
                    id={1}
                    imgUrl="https://images.pexels.com/photos/2074108/pexels-photo-2074108.jpeg"
                    title="Wow Cakes!"
                    rating={4.5}
                    genre="Desert"
                    address="123 Main St."
                    short_description="This is a test description"
                    dishes={[]}
                    long={77.2276224}
                    lat={28.622848}
                />
                <RestaurantCard
                    id={2}
                    imgUrl="https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Restaraunt Name"
                    rating={4.3}
                    genre="Italian"
                    address="123 Side St."
                    short_description="This is a test description"
                    dishes={[]}
                    long={77.2276224}
                    lat={28.622848}
                />
                <RestaurantCard
                    id={2}
                    imgUrl="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Restaraunt Name"
                    rating={4.7}
                    genre="Indian"
                    address="Main Street Downtown"
                    short_description="This is a test description"
                    dishes={[]}
                    long={77.2276224}
                    lat={28.622848}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow