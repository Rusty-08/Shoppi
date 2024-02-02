import { ChangeEvent, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { ClassNameValue } from 'tailwind-merge'
import { Filter } from 'lucide-react'
import Dropdown from './Dropdown'

export type HeaderProps = {
  inputValue: string
  // eslint-disable-next-line no-unused-vars
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  className?: ClassNameValue
}

const Header = ({ inputValue, handleSearch }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSticky(scrollPosition > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${
        isSticky && 'sticky top-14'
      } relative transition-all pt-8 w-full z-20 flex gap-4`}
    >
      <SearchBar
        className={isSticky ? 'shadow-sm' : 'shadow-none'}
        inputValue={inputValue}
        handleSearch={handleSearch}
      />
      {!isSticky && (
        <Dropdown Description={Filter}>
          <p>text</p>
        </Dropdown>
      )}
    </div>
  )
}

export default Header
