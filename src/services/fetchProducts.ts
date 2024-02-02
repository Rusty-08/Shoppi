import { productProps } from '../pages/Store/propTypes'

/* eslint-disable @typescript-eslint/no-explicit-any */
type FetchDataOptions = {
  signal?: AbortSignal | null
}

export const rate = (id: number) => {
  if (id < 10) {
    return 4.8
  }
  if (id < 15) {
    return 4.0
  }
  if (id <= 20) {
    return 3.8
  }
}

async function fetchProducts(options: FetchDataOptions = {}): Promise<any> {
  const apiUrl = 'https://fakestoreapi.com/products'

  const controller = new AbortController()
  const { signal: abortSignal } = controller

  try {
    const response = await fetch(apiUrl, {
      signal: options.signal || abortSignal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    const res = data.map((product: productProps) => ({
      ...product,
      rating: rate(product.id),
    }))

    return res as productProps[]
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log('Request was aborted')
    } else {
      throw new Error(`Error fetching data: ${error.message}`)
    }
  }
}

export default fetchProducts
