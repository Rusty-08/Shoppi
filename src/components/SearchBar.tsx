import { twMerge } from 'tailwind-merge'
import { HeaderProps } from './Header'

const SearchBar = ({ inputValue, handleSearch, className }: HeaderProps) => {
  return (
    <div className="flex flex-grow">
      <input
        type="text"
        value={inputValue}
        onChange={handleSearch}
        className={twMerge(
          'flex-grow pb-0.5 h-12 px-8 text-primary-dark rounded-full border border-primary-low-opacity-blue hover:border-primary-blue focus:border-primary-blue focus:outline-none',
          className,
        )}
        placeholder="Search Products"
      />
    </div>
  )
}

export default SearchBar
