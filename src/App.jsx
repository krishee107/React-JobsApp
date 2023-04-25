import Router from "./applications/router";
import "./firebase/firebase";
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store} className="app">
      <Navbar />
      <Router />
    </Provider>
  )
}


export default App;