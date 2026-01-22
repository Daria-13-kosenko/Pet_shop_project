import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from '../redux/features/categories/categoriesSlice'
import productsReducer from '../redux/features/products/productSlice'
import cartReducer from '../redux/features/cart/cartSlice'
import orderReducer from '../redux/features/order/orderSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
})
