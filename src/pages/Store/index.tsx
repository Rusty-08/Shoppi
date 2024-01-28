import { Products } from './Products'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Container } from '../../components/Container'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { fetchProductsAsync } from '../../slices/productSlice'
import { Outlet } from 'react-router-dom'

const Store = () => {
  const dispatch: AppDispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products)
  const data = useSelector((state: RootState) => state.products.products)

  const product = data.find(product => product.expanded)

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [dispatch])

  if (products.status === 'loading') {
    return <Loading loading={true} />
  }

  if (products.status === 'failed') {
    return <ErrorMessage error={products.error || 'Unknown error'} />
  }

  return (
    <Container className="flex-col">
      {product && <Outlet />}
      <Products data={data} />
    </Container>
  )
}

export default Store
