import { useEffect, useRef, useState } from 'react'

const useClickOutside = (initialState: boolean) => {
  const [isVisible, setIsVisible] = useState(initialState)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false)
      console.log('clicked outside')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return { ref, isVisible, setIsVisible } as const
}

export default useClickOutside
