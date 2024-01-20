import { productProps } from './propTypes'

type ProductCardProps = {
  data: productProps[]
}

export const Products = ({ data }: ProductCardProps) => {
  return (
    <div className="grid gap-4 grid-cols-4">
      {data.map(product => (
        <div
          key={product.id}
          className="border h-[20rem] flex flex-col items-center justify-between p-4"
        >
          <p className="text-sm">{product.title}</p>
          <div className="h-1/2 flex p-2 py-4 items-center justify-center bg-cover">
            <img className="h-full" src={product.image} alt={product.title} />
          </div>
          <p className="text-sm">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}
