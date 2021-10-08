import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
