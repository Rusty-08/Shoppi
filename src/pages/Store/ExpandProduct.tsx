import { useParams } from 'react-router-dom'
import { useDataFetching } from './data/dataFetching'
import { Loading } from '../../components/Loading'
import { Button } from '../../components/Button'
import { ShoppingCart } from 'lucide-react'
import { ProductNumber } from '../../components/ProductNumber'

export const ExpandProduct = () => {
  const { data, loading } = useDataFetching()
  const { productId } = useParams()

  const product = data[Number(productId) - 1]

  const title = product?.title
  const description = product?.description
  const image = product?.image
  const price = product?.price

  return (
    <div
      style={{ height: 'calc(100% - 9rem)' }}
      className="flex items-center justify-center fixed top-28 border bg-white left-[10%] right-[10%] rounded-lg"
    >
      {loading && <Loading loading={loading} />}
      {!loading && (
        <div className="flex h-full p-6 pt-12  w-full">
          <div className="h-full border-r w-1/2 flex items-center justify-center bg-cover">
            <img className="h-full" src={image} alt={title} />
          </div>
          <div className="flex px-10 w-1/2 flex-col items-start gap-4">
            <p className="line-clamp-2 text-2xl font-bold text-start text-primary-dark">
              {title}
            </p>
            <span className="text-primary-text">{description}</span>
            <div className="flex w-full justify-between items-center">
              <p className="text-xl text-primary-blue font-bold">
                ${price.toFixed(2)}
              </p>
              <ProductNumber buttonSize="md" />
            </div>
            <Button className="w-full">
              Add to cart
              <ShoppingCart className="w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
