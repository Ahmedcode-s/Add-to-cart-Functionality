"use client"

import Products from '@/app/utils/Mock';
import { IProduct } from '@/app/utils/Types';
import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState: IProduct[] = Products;

export const ProductSlice = createSlice({

  name: 'counter',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },

})

export const { } = ProductSlice.actions

export default ProductSlice.reducer