const ErrorMessage = ({ message }) => {
  console.log('ErrorMessage test:', message);

  return (
   <div className="error-container">
      <p className="error-message">{message}</p>
    </div>
  );
};
export default ErrorMessage;