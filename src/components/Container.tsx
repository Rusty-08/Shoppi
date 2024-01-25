import { ReactNode } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

type ContainerProps = {
  children: ReactNode
  className?: ClassNameValue
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 9rem)' }}
      className={twMerge('flex justify-center items-center', className)}
    >
      {children}
    </div>
  )
}
