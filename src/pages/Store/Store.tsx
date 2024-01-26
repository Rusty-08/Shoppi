/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from './Products'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { ExpandProduct } from './ExpandProduct'
import { Container } from '../../components/Container'
import { useEffect, useRef } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

export const Store = () => {
  const { data: memoizedData, setData, loading, error } = useFetchProducts()
  const productRef = useRef<HTMLDivElement>(null)
  const { ref, isVisible, setIsVisible } = useClickOutside(false, productRef)

  const handleProductClick = (id: number) => {
    setData(prevData =>
      prevData.map(product =>
        product.id === id
          ? { ...product, expanded: true }
          : { ...product, expanded: false },
      ),
    )
    setIsVisible(true)
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

  useEffect(() => {
    if (product) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [product])

  useEffect(() => {
    if (!isVisible) {
      handleBackClick()
    }
  }, [isVisible])

  if (loading) {
    return <Loading loading={loading} />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <Container>
      <Products
        exceptionRef={productRef}
        className={product ? 'mr-3' : 'mr-0'}
        data={memoizedData}
        handleProductClick={handleProductClick}
      />
      {product && (
        <ExpandProduct
          forwardeRef={ref}
          product={product}
          handleBackClick={handleBackClick}
        />
      )}
    </Container>
  )
}
