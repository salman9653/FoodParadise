import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        enre: null,
        address: null,
        short_description: null,
        dishes: null,
    }
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestautant: (state, action) => {
            state.restaurant = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setRestautant } = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurant.restaurant;

export default restaurantSlice.reducer