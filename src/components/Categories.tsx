import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Button } from './Button'

type CategoriesProps = {
  // eslint-disable-next-line no-unused-vars
  selectCategory: (_: string) => void
}

const Categories = ({ selectCategory }: CategoriesProps) => {
  const products = useSelector((state: RootState) => state.products.products)
  const categories = [...new Set(products.map(product => product.category))]

  const getCategoryImage = (category: string) => {
    const product = products.find(product => product.category === category)
    return product?.image
  }

  return (
    <div className="flex p-6 rounded-lg flex-col bg-white shadow-sm w-full my-4 gap-2">
      <h1 className="text-primary-text mb-1 font-medium">CATEGORIES</h1>
      <div className="grid grid-cols-4 gap-4">
        {categories.map(category => (
          <Button
            onClick={() => category && selectCategory(category)}
            variant="bordered"
            className="flex-grow bg-white px-6 text-primary-dark border border-primary-low-opacity-blue rounded-lg h-20 flex items-center justify-start gap-4"
          >
            <img
              className="h-1/2"
              src={category && getCategoryImage(category)}
              alt={category}
            />
            <p className="text-sm text-nowrap">{category?.toUpperCase()}</p>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Categories
