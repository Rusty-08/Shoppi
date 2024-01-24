type errorMessageProps = {
  error: Error
}

export const ErrorMessage = ({ error }: errorMessageProps) => {
  return <p>{error.message}</p>
}
