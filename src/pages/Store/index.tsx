/* eslint-disable indent */
import { Products } from './Products'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Container } from '../../components/Container'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { fetchProductsAsync } from '../../slices/productSlice'
import Fuse from 'fuse.js'
import Header, { OrderProps, PriceProps } from '../../components/Header'
import Categories from '../../components/Categories'
import { productProps } from './propTypes'

const Store = () => {
  const dispatch: AppDispatch = useDispatch()
  const Navigate = useNavigate()
  const { productId } = useParams()
  const products = useSelector((state: RootState) => state.products)
  const data = useSelector((state: RootState) => state.products.products)
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [activeOrder, setActiveOrder] = useState<OrderProps>(null)
  const [priceOrder, setPriceOrder] = useState<PriceProps>({
    minimum: 0,
    maximum: Math.max(...data.map(product => product.price)),
  })

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ['title', 'category'],
        includeScore: true,
        includeMatches: true,
      }),
    [data],
  )

  const results = useMemo(() => fuse.search(query), [fuse, query])
  const productResults = query ? results.map(character => character.item) : data

  const handleSearch = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setQuery(currentTarget.value)
    if (query) {
      Navigate('/store')
    }
  }

  const expandedProduct = data[Number(productId) - 1]

  const selectCategory = useCallback((category: string) => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(p => p !== category)
      }
      return [...prevCategories, category]
    })
  }, [])

  const getSelectedProducts = useCallback(() => {
    if (selectedCategories.length === 0) return productResults
    return productResults.filter(
      product =>
        product.category && selectedCategories.includes(product.category),
    )
  }, [productResults, selectedCategories])

  const sortProducts = () => {
    const selectedProducts = [...getSelectedProducts()]
    if (activeOrder === 'Ascending') {
      return selectedProducts.sort((a, b) => a.price - b.price)
    }
    if (activeOrder === 'Descending') {
      return selectedProducts.sort((a, b) => b.price - a.price)
    }
    return selectedProducts
  }

  const handleMinPriceChange = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) => {
    setPriceOrder({
      ...priceOrder,
      minimum: Number(currentTarget.value),
    })
  }

  const handleMaxPriceChange = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) => {
    setPriceOrder({
      ...priceOrder,
      maximum: Number(currentTarget.value),
    })
  }

  const sortProductsByPrice = () => {
    return sortProducts().reduce((acc, product) => {
      if (
        product.price >= priceOrder.minimum &&
        product.price <= priceOrder.maximum
      ) {
        acc.push(product)
      }
      return acc
    }, [] as productProps[])
  }

  const setOrder = (order: OrderProps) => {
    setActiveOrder(order)
  }

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
    <Container className="flex-col w-full">
      <Header
        inputValue={query}
        handleSearch={handleSearch}
        order={activeOrder}
        handleOrder={setOrder}
        price={priceOrder}
        handleMinPriceChange={handleMinPriceChange}
        handleMaxPriceChange={handleMaxPriceChange}
      />
      {!expandedProduct ? (
        <Categories
          selectedCategories={selectedCategories}
          selectCategory={selectCategory}
        />
      ) : (
        <Outlet />
      )}
      <Products data={sortProductsByPrice()} />
    </Container>
  )
}

export default Store
