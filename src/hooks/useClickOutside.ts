import { useEffect, useRef, useState } from 'react'

type useClickOutsideProps = {
  initialState: boolean
  exceptionRef?: React.RefObject<HTMLElement>
}

const useClickOutside = ({
  initialState,
  exceptionRef,
}: useClickOutsideProps) => {
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
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible])

  return { ref, isVisible } as const
}

export default useClickOutside
