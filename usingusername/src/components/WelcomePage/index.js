import "./style.css";
const WelcomePage = ({ user, setIsLogged }) => {
  const HandleLoggout = (setIsLogged) => setIsLogged(false);
  return (
    <div className="WelcomePage">
      <h1 className="title">Welcome {user}, hope you enjoy</h1>
      <button className="btn" onClick={() => HandleLoggout(setIsLogged)}>
        Sair
      </button>
    </div>
  );
};
export default WelcomePage;
