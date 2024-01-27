/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from './Products'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { ExpandProduct } from './ExpandProduct'
import { Container } from '../../components/Container'
import { useEffect, useRef } from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import {
  expandProduct,
  fetchProductsAsync,
  handleBackClick,
} from '../../slices/productSlice'

const Store = () => {
  const productRef = useRef<HTMLDivElement>(null)
  const { ref } = useClickOutside({
    initialState: false,
    exceptionRef: productRef,
  })

  const dispatch = useDispatch()
  const dispatchProducts: AppDispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products)
  const data = useSelector((state: RootState) => state.products.products)

  const product = data.find(product => product.expanded)

  useEffect(() => {
    if (product) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [product])

  useEffect(() => {
    dispatchProducts(fetchProductsAsync())
  }, [dispatchProducts])

  if (products.status === 'loading') {
    return <Loading loading={true} />
  }

  if (products.status === 'failed') {
    return <ErrorMessage error={products.error || 'Unknown error'} />
  }

  return (
    <Container>
      <Products
        exceptionRef={productRef}
        className={product ? 'mr-3' : 'mr-0'}
        data={products.products}
        handleProductClick={expandProduct}
      />
      {product && (
        <ExpandProduct
          forwardeRef={ref}
          product={product}
          handleBackClick={() => dispatch(handleBackClick())}
        />
      )}
    </Container>
  )
}

export default Store
