import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function BasicExample() {
  return (
    <Router>
      <div>
        <div style={{listStyleType :"none " ,float:"left" ,width:"100%"}}>
        <ul  >
          <li style={{listStyleType :"none " ,float:"left", margin:"20px"}}>
            <Link to="/">Home</Link>
          </li>
          <li style={{listStyleType :"none " ,float:"left", margin:"20px"}}>
            <Link to="/about">About</Link>
          </li>
          <li style={{listStyleType :"none " ,float:"left", margin:"20px"}}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        </div>
        <hr/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is  home page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About uS</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard </h2>
    </div>
  );
}