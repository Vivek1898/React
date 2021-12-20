import React,{Component} from 'react';
import { Route ,Redirect,Switch} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Movies from './components/movies';
import MovieForm from "./components/movieForm"
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import NavBar from './components/navBar';
import LoginForm from './components/loginform';
import Logout from './components/logout';
import RegisterForm from './components/registerForm';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import ProtectedRoute from './components/protectedRoute';



class App extends Component{
  state={};
  componentDidMount() {
  const user= auth.getCurrenUser();
    this.setState({user}); 

  }

render(){
  const{user}=this.state;
  return (
    <React.Fragment>
      <ToastContainer/>
  <NavBar user={this.state.user}/>
  <main className="container">
    {/* Protecting routes using render movieform */}
 <Switch>
 <Route path="/register" component={RegisterForm}></Route>
 <Route path="/login" component={LoginForm}></Route>
 <Route path="/logout" component={Logout}></Route>
 {/* //Protect route */}
 <ProtectedRoute path="/movies/:id" component={MovieForm}/>

  <Route path="/movies" render={props => <Movies {...props} user={this.state.user} /> }></Route>
  <Route path="/customers" component={Customers}></Route>
  <Route path="/rentals" component={Rentals}></Route>
  <Route path="/not-found" component={NotFound}></Route>
  <Redirect from="/" exact to="/movies"/>
  <Redirect exact to="/not-found"/>
  </Switch>

   </main>
   </React.Fragment>
  );
}

 
}

export default App;
