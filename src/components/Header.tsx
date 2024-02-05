/* eslint-disable no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react'
import { ClassNameValue } from 'tailwind-merge'
import { DollarSignIcon, Filter, Star } from 'lucide-react'
import Dropdown from './Dropdown'
import { Button } from './Button'
import Input from './Input'

export type OrderProps = 'Ascending' | 'Descending' | null

export type PriceProps = {
  minimum: number
  maximum: number
}

export type HeaderProps = {
  inputValue: string
  order: OrderProps
  handleOrder: (e: OrderProps) => void
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  className?: ClassNameValue
  price: PriceProps
  handleMinPriceChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleMaxPriceChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ORDER: OrderProps[] = ['Ascending', 'Descending']

const Header = ({
  order,
  inputValue,
  handleSearch,
  handleOrder,
  price,
  handleMinPriceChange,
  handleMaxPriceChange,
}: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(false)
  const [startRating, setStartRating] = useState(1)
  const [endRating, setEndRating] = useState(5)

  const handleStartSetRate = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) => {
    const input = Number(currentTarget.value)
    if (input > 0 && input < 6) {
      setStartRating(input)
    }
  }

  const handleEndSetRate = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) => {
    const input = Number(currentTarget.value)
    if (input > 0 && input < 6) {
      setEndRating(input)
    }
  }

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
        isSticky && 'sticky z-20 top-14'
      } relative transition-all pt-8 w-full flex gap-4`}
    >
      <Input
        type="text"
        className={`${
          isSticky ? 'shadow-sm' : 'shadow-none'
        } w-full pb-0.5 h-12 px-8 rounded-full`}
        value={inputValue}
        placeholder="Search Products"
        onChange={handleSearch}
      />
      {!isSticky && (
        <Dropdown Description={Filter}>
          <div className="flex flex-col w-[20rem] p-4 gap-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm text-primary-text font-medium">
                PRICE
              </span>
              <div className="flex gap-2 w-full">
                {ORDER.map(btn => (
                  <Button
                    key={btn}
                    onClick={() => handleOrder(btn)}
                    variant="bordered"
                    className={`${
                      order === btn && 'border-primary-blue'
                    } text-sm w-1/2 h-10`}
                  >
                    {btn}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  className="w-full rounded-md"
                  type="number"
                  Icon={DollarSignIcon}
                  value={price.minimum}
                  onChange={handleMinPriceChange}
                />
                <Input
                  className="w-full rounded-md"
                  type="number"
                  Icon={DollarSignIcon}
                  value={price.maximum}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-primary-text font-medium">
                RATING
              </span>
              <div className="flex gap-2">
                <Input
                  onChange={handleStartSetRate}
                  value={startRating}
                  className="w-full"
                  type="number"
                  Icon={Star}
                />
                <Input
                  onChange={handleEndSetRate}
                  value={endRating}
                  className="w-full"
                  type="number"
                  Icon={Star}
                />
              </div>
            </div>
          </div>
        </Dropdown>
      )}
    </div>
  )
}

export default Header
