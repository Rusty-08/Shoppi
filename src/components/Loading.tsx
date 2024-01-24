import { Spinner } from './Spinner'

type SpinnerProps = {
  loading: boolean
}

export const Loading = ({ loading }: SpinnerProps) => {
  return (
    <div
      style={{ height: 'calc(100vh - 14rem)' }}
      className="flex fixed top-[7rem] left-0 w-full items-center justify-center"
    >
      <Spinner loading={loading} />
    </div>
  )
}
