const ErrorPage = ({ error }) => {
  return (
    <>
      <h1>Oh no, something has gone wrong :(</h1>
      <h2>{error.status}</h2>
      <h3>{error.data.msg}</h3>
    </>
  );
};

export default ErrorPage;
