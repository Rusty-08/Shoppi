// dataFetching.ts
import { useState, useEffect, useMemo } from 'react'
import fetchDataFromAPI from '../../../services/api'
import { productProps } from './propTypes'

export const useDataFetching = () => {
  const [data, setData] = useState<productProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromAPI()
        const newResult = await result.map((item: object) => ({
          ...item,
          expanded: false,
        }))
        setData(newResult)
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

  const memoizedData = useMemo(() => data, [data])

  return { data: memoizedData, setData, loading, error }
}
