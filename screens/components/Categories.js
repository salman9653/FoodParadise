import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import CategoryCard from './CategoryCard'

// import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl="https://images.pexels.com/photos/2074108/pexels-photo-2074108.jpeg" title='Card 1' />
            <CategoryCard imgUrl="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title='Card 2' />
            <CategoryCard imgUrl="https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title='Card 3' />
            <CategoryCard imgUrl="https://images.pexels.com/photos/2074108/pexels-photo-2074108.jpeg" title='Card 4' />
            <CategoryCard imgUrl="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title='Card 5' />
            <CategoryCard imgUrl="https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title='Card 6' />
        </ScrollView>
    )
}

export default Categories