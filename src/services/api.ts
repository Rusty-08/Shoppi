/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
type FetchDataOptions = {
  signal?: AbortSignal | null
}

export async function fetchDataFromAPI(
  options: FetchDataOptions = {},
): Promise<any> {
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
    return data
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log('Request was aborted')
    } else {
      throw new Error(`Error fetching data: ${error.message}`)
    }
  }
}

export default fetchDataFromAPI
