/* eslint-disable @typescript-eslint/no-explicit-any */
type FetchDataOptions = {
  signal?: AbortSignal | null
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
    console.log(data)
    return data
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log('Request was aborted')
    } else {
      throw new Error(`Error fetching data: ${error.message}`)
    }
  }
}

export default fetchProducts
