import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

import { urlFor } from '../sanity';

const DishRow = ({ id, name, image, description, price }) => {

    const [isPressed, setIsPressed] = useState(false);

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white p-4 border border-gray-200 ${isPressed && 'border-b-0'}`}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">₹ {price}</Text>
                    </View>
                    <View>
                        <Image
                            style={{ borderWidth: 1, backgroundColor: "#F3F3F4" }}
                            source={{ uri: urlFor(image).url() }}
                            className="h-20 w-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {
                isPressed &&
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity>
                            <MinusCircleIcon
                                // color={items.length > 0 ? "#0CB" : "gray"}
                                color="#0CB"
                                size={40}
                            />
                        </TouchableOpacity>
                        <Text>0</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon
                                // color={items.length > 0 ? "#0CB" : "gray"}
                                color="#0CB"
                                size={40}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    )
}

export default DishRow