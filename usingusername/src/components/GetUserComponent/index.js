import { useState } from "react";
const GetUserComponent = ({ setUser, setIsLogged, isLogged }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const UserNameSubmit = () => {
    setUser(userNameInput);
    setIsLogged(true);
  };

  return (
    <>
      <input
        value={userNameInput}
        onChange={(e) => setUserNameInput(e.target.value)}
      ></input>
      <button onClick={() => UserNameSubmit()}>Login</button>
    </>
  );
};
export default GetUserComponent;
