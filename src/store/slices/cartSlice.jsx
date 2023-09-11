import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    card: [],
    products: []     
}

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        getProducts(state, action) {
            state.products.push(...action.payload);
        },

        addItem(state, action) {
            const findItem = state.card.find(item => item.id === action.payload.id);
            
            if(findItem) {
                findItem.count++;
            } else {
                state.card.push({
                    ...action.payload,
                    count: 1
                });
            }
        },

        decreaseItem(state, action) {
            const findItem = state.card.find(item => item.id === action.payload.id);
            if(findItem) {
                findItem.count--;
            }
        },

        deleteItem(state, action) {
            state.card = state.card.filter(item => item.id !== action.payload.id);
        }
    }
})

export default cartSlice.reducer;

export const {addItem, decreaseItem, deleteItem, getProducts} = cartSlice.actions;
