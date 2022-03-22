import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllNinjas from './components/AllNinjas';
import NinjaForm from './components/NinjaForm';
import OneNinjaDetail from './components/OneNinjaDetail';

function App() {

  //create a variable that we can send to the form component and the form component will toggle this variables value each time the form is submitted
  let [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Wall of Ninjas Full Stack</h1>
        <Link to="/" className="btn btn-info">Home</Link>
        <Switch>
          <Route exact path="/">
            <NinjaForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></NinjaForm>
            <hr />
            <AllNinjas formSubmitted = {formSubmitted}></AllNinjas>
          </Route>
          <Route exact path= "/details/:_id">
            <OneNinjaDetail></OneNinjaDetail>
          </Route>
          


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
