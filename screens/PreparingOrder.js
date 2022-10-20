import { View, Text } from 'react-native'
import React from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrder = () => {
    const navigation = useNavigation()

    return (
        <View className="flex-1 bg-[#0CB] justify-center items-center">
            <Animatable.Image
                source={require('../assets/image_processing.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white text-center"
            >
                Wating for Restaurant to Accept your Order !
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color="#3FE" />
        </View>
    )
}

export default PreparingOrder