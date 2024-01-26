import { useEffect, useRef, useState } from 'react'

const useClickOutside = (
  initialState: boolean,
  exceptionRef?: React.RefObject<HTMLElement>,
) => {
  const [isVisible, setIsVisible] = useState(initialState)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      exceptionRef?.current &&
      !exceptionRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false)
      console.log('Click outside detected')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible])

  return { ref, isVisible, setIsVisible } as const
}

export default useClickOutside
