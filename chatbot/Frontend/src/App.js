import React, { useState } from 'react';
import Home from "./Pages/Home";
import User from "./Pages/User";
import LandingPage from "./Pages/LandingPage";
import NavBar from "./Components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-chat-widget/lib/styles.css';
import SimpleForm from './Components/SimpleForm';

export default function App() {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
        <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="btn-bot" onClick={() => startChat()}>click to chat... </button> 
            : <button className="btn-bot" onClick={() => hideChat()}>click to hide... </button>}
        </div>
      </div>
    </Router>
    
  );
}