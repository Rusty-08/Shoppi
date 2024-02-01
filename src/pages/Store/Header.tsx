import { Search } from 'lucide-react'
import { Button } from '../../components/Button'
import { ChangeEvent } from 'react'

type HeaderProps = {
  inputValue: string
  // eslint-disable-next-line no-unused-vars
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const Header = ({ inputValue, handleSearch }: HeaderProps) => {
  return (
    <div className="flex flex-grow">
      <input
        type="text"
        value={inputValue}
        onChange={handleSearch}
        className="flex-grow px-8 text-primary-dark shadow-sm rounded-l-full border border-primary-low-opacity-blue hover:border-primary-blue focus:border-primary-blue focus:outline-none"
        placeholder="Search Products"
      />
      <Button variant="bordered" className="rounded-none rounded-r-full">
        <Search strokeWidth={1} />
      </Button>
    </div>
  )
}

export default Header
