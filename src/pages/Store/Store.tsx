/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from './Products'
import { useDataFetching } from './data/dataFetching'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { ExpandProduct } from './ExpandProduct'

export const Store = () => {
  const { data: memoizedData, setData, loading, error } = useDataFetching()

  const handleProductClick = (id: number) => {
    setData(prevData =>
      prevData.map(product =>
        product.id === id
          ? { ...product, expanded: true }
          : { ...product, expanded: false },
      ),
    )
  }

  const handleBackClick = () => {
    setData(
      memoizedData.map(product => ({
        ...product,
        expanded: false,
      })),
    )
  }

  const product = memoizedData.find(product => product.expanded)

  if (loading) {
    return <Loading loading={loading} />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  if (product) {
    return <ExpandProduct product={product} handleBackClick={handleBackClick} />
  }

  return (
    <Products data={memoizedData} handleProductClick={handleProductClick} />
  )
}
