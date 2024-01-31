export type productProps = {
  id: number
  title: string
  price: number
  category?: string
  description?: string
  image: string
  expanded: boolean
  addedToCart: boolean
  quantityInCart: number
}
