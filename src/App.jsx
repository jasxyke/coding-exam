import "./css/App.css";
import Navbar from "./components/navbars/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
