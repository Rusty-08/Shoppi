import { Products } from './Products'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Container } from '../../components/Container'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { Outlet, useParams } from 'react-router-dom'
import { fetchProductsAsync } from '../../slices/productSlice'

const Store = () => {
  const dispatch: AppDispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products)
  const data = useSelector((state: RootState) => state.products.products)
  const { productId } = useParams()

  const expandedProduct = data[Number(productId) - 1]

  useEffect(() => {
    if (products.status === 'idle') {
      dispatch(fetchProductsAsync())
    }
  }, [dispatch, products.status])

  if (products.status === 'loading') {
    return <Loading loading={true} />
  }

  if (products.status === 'failed') {
    return <ErrorMessage error={products.error || 'Unknown error'} />
  }

  return (
    <Container className="flex-col">
      {expandedProduct && <Outlet />}
      <Products data={data} />
    </Container>
  )
}

export default Store
