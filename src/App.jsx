import Router from "./applications/router";
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router />
    </div>
  )
}


export default App;