import { ReactNode } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ClassNameValue, twMerge } from 'tailwind-merge'

type LinkTypes = {
  to: string
  children: ReactNode
  className?: ClassNameValue
  props?: ReactNode
}

export const LinkPath = ({ to, children, className, ...props }: LinkTypes) => {
  const resolvePath = useResolvedPath(to)
  // const { productId } = useParams()
  const isActive = useMatch({
    path: resolvePath.pathname,
    end: true,
  })

  return (
    <li
      className={twMerge(
        `h-full hover:text-primary-blue text-[0.9rem] border-b-2 font-medium ${
          isActive
            ? 'text-primary-blue border-b-primary-blue'
            : 'text-primary-text border-b-transparent'
        }`,
        className,
      )}
      {...props}
    >
      <Link className="h-full flex items-center px-2" to={to}>
        {children}
      </Link>
    </li>
  )
}
