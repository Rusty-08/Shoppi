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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        exceptionRef?.current &&
        !exceptionRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false)
        console.log('clicked outside')
      } else {
        setIsVisible(true)
        console.log('clicked inside')
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible, exceptionRef])

  return { ref, isVisible } as const
}

export default useClickOutside
