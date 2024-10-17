import Login from "./Login/Login";
import "./App.css";
import { useUser } from "./Context/UserContext";
function App() {
  
  const { userObject, setUser } = useUser();
  return (
    <div className="">
      <Login setUser={setUser} />
    </div>
  );
}

export default App;
