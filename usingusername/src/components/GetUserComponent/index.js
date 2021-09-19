import { useState } from "react";
import "./style.css";
const GetUserComponent = ({ setUser, setIsLogged }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const UserNameSubmit = () => {
    setUser(userNameInput);
    setIsLogged(true);
  };

  return (
    <div className="GetUserComponent">
      <input
        value={userNameInput}
        onChange={(e) => setUserNameInput(e.target.value)}
      ></input>
      <button onClick={() => UserNameSubmit()}>Login</button>
    </div>
  );
};
export default GetUserComponent;
