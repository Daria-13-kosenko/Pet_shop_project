import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories/categoriesSlice'
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
})
