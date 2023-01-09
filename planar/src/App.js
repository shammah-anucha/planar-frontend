import "./App.css";
// import Sidebar from "./components/sidebar";
import Unavailability from "./components/unavailability/unavailability";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();

  // const navigateToVacations = () => {
  //   // 👇️ navigate to /vacations
  //   navigate("/unavailability/vacations");
  // };
  return (
    <Router className="App">
      {/* <Sidebar /> */}
      <Unavailability />
    </Router>
  );
}

export default App;
