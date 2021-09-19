import "./App.css";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/GetUserComponent";
import { useState } from "react";
function App() {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  return isLogged ? (
    <WelcomePage user={user} setIsLogged={setIsLogged} />
  ) : (
    <LoginPage setUser={setUser} setIsLogged={setIsLogged} />
  );
}

export default App;
