import { GridLoader } from 'react-spinners'

type SpinnerProps = {
  loading: boolean
}

export const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <GridLoader
      color="#1f4690"
      loading={loading}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}
