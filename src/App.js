// import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HashRouter, Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import Home from "./Home";
import './App.css';
import History from './About_ai.js';
import Contacts from "./Contact";
import Our_stroy from './Stroy_ai';
class App extends React.Component{
  componentDidMount(){
    document.title = "A.i.Convergence(Thailand)"
  }
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
render(){
  return (
    <HashRouter>
      <Routes basename="/#/A.i">
        <Route exact path="/A.i/" element={<Home />} />
        <Route path="/A.i/History" element={<History />} />
        <Route path="/A.i/Contact" element={<Contacts />} />
        <Route path="/A.i/Stroy" element={<Our_stroy />} />
      </Routes>
    </HashRouter>
  );
}
}
export default App;