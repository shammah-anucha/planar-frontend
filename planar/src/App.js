import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Sidebar />
    </Router>
  );
}

export default App;
