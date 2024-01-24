/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from './Products'
import { Outlet, useParams } from 'react-router-dom'
import { useDataFetching } from './data/dataFetching'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'

export const Store = () => {
  const { data, setData, loading, error } = useDataFetching()
  const { productId } = useParams()

  const handleProductClick = (id: number) => {
    setData(prevData =>
      prevData.map(product =>
        product.id === Number(id)
          ? { ...product, expanded: !product.expanded }
          : product,
      ),
    )
  }

  if (loading) {
    return <Loading loading={loading} />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div>
      {!productId && (
        <Products data={data} handleProductClick={handleProductClick} />
      )}
      <Outlet />
    </div>
  )
}
