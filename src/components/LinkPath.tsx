import { ReactNode } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

type LinkTypes = {
  to: string
  children: ReactNode
  props?: ReactNode
}

export const LinkPath = ({ to, children, ...props }: LinkTypes) => {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true })

  return (
    <li
      className={isActive ? 'text-primary-active' : 'text-primary-text'}
      {...props}
    >
      <Link to={to}>{children}</Link>
    </li>
  )
}
