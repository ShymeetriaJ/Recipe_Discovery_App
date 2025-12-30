const Spinner = () => {
  console.log('Spinner rendering');

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
};
export default Spinner;