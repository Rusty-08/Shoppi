import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariance = cva(
  [
    'transition-colors',
    'duration-300',
    'items-center',
    'justify-center',
    'flex',
    'gap-2',
    'text-primary-text',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-primary-blue',
          'hover:bg-opacity-90',
          'active:scale-[0.99]',
          'text-sm',
          'text-primary',
        ],
        ghost: ['hover:bg-primary-low-opacity-blue'],
        transparent: ['hover:bg-transparent'],
      },
      size: {
        default: ['rounded-full', 'px-5', 'py-2'],
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
