type errorMessageProps = {
  error: string | undefined | null
}

export const ErrorMessage = ({ error }: errorMessageProps) => {
  return <p>{error}</p>
}
