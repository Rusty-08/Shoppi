import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import fetchProducts from '../services/fetchProducts'
import { productProps } from '../pages/Store/propTypes'

type productsProps = {
  products: productProps[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | undefined | null
}

const initialState: productsProps = {
  products: [],
  status: 'idle',
  error: null,
}

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts()
    return response as productProps[]
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleBackClick: state => {
      state.products.forEach(product => {
        product.expanded = false
      })
    },
    expandProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      state.products = state.products.map(product => ({
        ...product,
        expanded: productId === product.id ? true : false,
      }))
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductsAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { handleBackClick, expandProduct } = productsSlice.actions
export default productsSlice.reducer
