import { Products } from './Products'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Container } from '../../components/Container'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { fetchProductsAsync } from '../../slices/productSlice'
import Fuse from 'fuse.js'
import Header from '../../components/Header'
import Categories from '../../components/Categories'

const Store = () => {
  const dispatch: AppDispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products)
  const data = useSelector((state: RootState) => state.products.products)
  const { productId } = useParams()
  const [query, setQuery] = useState('')
  const Navigate = useNavigate()
  // const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const fuse = new Fuse(data, {
    keys: ['title', 'category'],
    includeScore: true,
    includeMatches: true,
  })

  const results = fuse.search(query)
  const productResults = query ? results.map(character => character.item) : data

  const handleSearch = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setQuery(currentTarget.value)
    if (query) {
      Navigate('/store')
    }
  }

  const expandedProduct = data[Number(productId) - 1]

  const selectCategory = (category: string) => {
    // const categories = selectedCategories?.concat(category)
    // setSelectedCategories(categories)
    return category
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
      <Header inputValue={query} handleSearch={handleSearch} />
      {!expandedProduct ? (
        <Categories selectCategory={selectCategory} />
      ) : (
        <Outlet />
      )}
      <Products data={productResults} />
    </Container>
  )
}

export default Store
