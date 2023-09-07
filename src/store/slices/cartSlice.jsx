import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

 const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addProduct(state, action) {
            const findItem = state.cart.find(item => item.id === action.payload.id);
         
            if(findItem) {
                findItem.count++;
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1
                });
            }
        }
    }
})

export default cartSlice.reducer;

export const {addProduct} = cartSlice.actions;
