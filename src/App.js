import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Formc from "./components/Formc";
import FormUc from "./components/FormUc";
import FormUu from "./components/FormUu";
import Formu from "./components/Formu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admins from "./pages/Admins";
import Employeeds from "./pages/Employeeds";
import Users from "./pages/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/login" exact component={Login}/>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/employeeds" exact component={Employeeds}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/admins" exact component={Admins}/>
          <Route path="/create" exact component={Formc}/>
          <Route path="/update" exact component={Formu}/>
          <Route path="/createu" exact component={FormUc}/>
          <Route path="/updateu" exact component={FormUu}/>
        </Switch>
        <Footer/>
      </Router>
           
    </div>
  );
}

export default App;
