import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariance = cva(
  [
    'transition-all',
    'duration-300',
    'items-center',
    'justify-center',
    'flex',
    'gap-2',
    'text-primary-text',
    'active:scale-[.99]',
    'hover:bg-opacity-95',
  ],
  {
    variants: {
      variant: {
        default: ['bg-primary-blue', 'text-primary'],
        ghost: ['hover:bg-primary-low-opacity-blue'],
        transparent: ['hover:bg-transparent'],
        bordered: [
          'bg-primary-low-opacity-blue',
          'border',
          'border-transparent',
          'text-primary-blue',
          'hover:border-primary-blue',
        ],
      },
      size: {
        default: ['rounded-md', 'px-8', 'py-3'],
        icon: [
          'rounded-full',
          'w-10',
          'h-10',
          'p-2',
          'flex',
          'items-center',
          'justify-center',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type buttonProps = VariantProps<typeof buttonVariance> &
  ComponentProps<'button'>

type mixProps = buttonProps & {
  forwardedRef?: ForwardedRef<HTMLButtonElement>
}

export const Button = ({
  variant,
  size,
  className,
  forwardedRef,
  ...props
}: mixProps) => {
  return (
    <button
      ref={forwardedRef}
      className={twMerge(buttonVariance({ variant, size }), className)}
      {...props}
    />
  )
}
