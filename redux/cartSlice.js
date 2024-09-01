import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        state.items = [...state.items ,action.payload]
    },
    removeFromCart:(state,action)=>{
        const newCart = [...state.items];
        const itemIndex = state.items.findIndex(item=> item._id == action.payload.id);
        if(itemIndex >=0){
            newCart.splice(itemIndex,1);
        }else{
            console.log('some thing went wrong!');
            
        };
        state.items = newCart;
    },
    emptyCart:(state,action)=>{
        state.items= [];
    },
  },
})

export const { addToCart,removeFromCart,emptyCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = (state,id)=> state.cart.items.filter(item => item._id == id);

export const selectedTotalCartPrice = state=> state.cart.items.reduce((total,item)=> total= total + item.price,0 );

export default cartSlice.reducer;