import './App.scss';
import {Route} from "react-router-dom"
import Header from './components/Header';
/// left menu and pages from left menu
import LeftMenu from './components/leftmenu/LeftMenu';
import Charts from "./components/leftmenu/pages/Charts"
import Dashboard from "./components/leftmenu/pages/Dashboard"
import Tables from "./components/leftmenu/pages/Tables"
import Layouts from "./components/leftmenu/pages/Layouts"
import Register from "./components/leftmenu/pages/authorisation/Register"
import Login from "./components/leftmenu/pages/authorisation/Login"
import Errors from "./components/leftmenu/pages/Errors"
function App() {

  return (
    <div className="App">

      <Header/>
      <LeftMenu/>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/layouts" component={Layouts}/>
      <Route path="/charts" component={Charts}/>
      <Route path="/tables" component={Tables}/>
      <Route path ="/register" component={Register}/> 
      <Route path = "/login" component = {Login}/>
      <Route path ="/errors" component= {Errors}/>
    </div>
  );
}

export default App;
