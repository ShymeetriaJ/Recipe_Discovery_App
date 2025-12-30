const ErrorMessage = ({ message }) => {
  console.log('ErrorMessage test:', message);

  return (
    <div style={styles.container}>
      <p style={styles.message}>{message}</p>
    </div>
  );
};
export default ErrorMessage;