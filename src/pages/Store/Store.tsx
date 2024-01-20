/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import fetchDataFromAPI from '../../services/api'
import { productProps } from './propTypes'
import { Products } from './Products'

export const Store = () => {
  const [data, setData] = useState<productProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromAPI()
        setData(result)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error)
        } else {
          console.error('Unknown error:', error)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="py-10">
      <Products data={data} />
    </div>
  )
}
