import "./App.css";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import EshopContextProvider from "./components/Context";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Man from "./components/products/Man";

function App() {
  return (
    <BrowserRouter>
      <EshopContextProvider>
        <Header />
        <Navbar />
        <Main />
        <Routes />
      </EshopContextProvider>
    </BrowserRouter>
  );
}

export default App;
