export type productProps = {
  id: number
  title: string
  price: number
  category?: string
  description?: string
  image: string
  rating: number
  expanded: boolean
  addedToCart: boolean
  quantityInCart: number
  checked: boolean
}
