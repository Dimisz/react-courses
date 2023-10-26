interface ErrorMessageProps { errorMessage: string; }

const ErrorMessage = ({errorMessage}: ErrorMessageProps ) => {
  return(
    <p className="error">{errorMessage}</p>
  )
}

export default ErrorMessage;