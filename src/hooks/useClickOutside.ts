import { useEffect, useRef, useState } from 'react'

const useClickOutside = (initialState: boolean) => {
  const [isVisible, setIsVisible] = useState(initialState)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isVisible) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsVisible(false)
          console.log('clicked outside')
        }
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible])

  return [ref, isVisible, setIsVisible] as const
}

export default useClickOutside
