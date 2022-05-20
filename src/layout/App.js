import logo from "../assets/images/logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav style={{ borderBottom: "solid 1px #333", paddingBottom: "1rem" }}>
          <Link to="/register" className="App-link">
            Cadastro
          </Link>
          |
          <Link to="/login" className="App-link">
            Login
          </Link>
          |
          <Link to="/extract" className="App-link">
            Extrato
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
