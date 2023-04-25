import Router from "./applications/router";
import "./firebase/firebase";
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Router />
      </div>
    </Provider>
  )
}


export default App;