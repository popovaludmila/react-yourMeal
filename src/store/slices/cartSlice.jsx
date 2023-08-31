import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
    cart: [
    ]
}

 const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addProduct(state, action) {
            state.cart.push(action.payload)
        }
    }
})

export default cartSlice.reducer;

export const {addProduct} = cartSlice.actions;