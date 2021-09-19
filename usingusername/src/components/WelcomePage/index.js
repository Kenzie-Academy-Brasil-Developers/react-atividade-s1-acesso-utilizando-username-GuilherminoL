const WelcomePage = ({ user, setIsLogged }) => {
  const HandleLoggout = (setIsLogged) => setIsLogged(false);
  return (
    <>
      <h1>Welcome {user}, hope you enjoy</h1>
      <button onClick={() => HandleLoggout(setIsLogged)}> Sair</button>
    </>
  );
};
export default WelcomePage;
