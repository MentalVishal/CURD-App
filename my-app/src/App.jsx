import "./App.css";
import { MainRoutes } from "./Components/MainRoutes";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Jai Shree Ram</h1> */}
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
