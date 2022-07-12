import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {HashRouter, Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import Home from "./Home";
import './App.css';
import History from './About_ai.js';
import Contacts from "./Contact";
import Our_stroy from './Stroy_ai';
import News from './New';
import Ai_tech from './Techno';
import Job from './job';
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
    <BrowserRouter>
      <Routes basename="/A.i">
        <Route exact path="/A.i/" element={<Home />} />
        <Route path="/A.i/History" element={<History />} />
        <Route path="/A.i/Contact" element={<Contacts />} />
        <Route path="/A.i/Stroy" element={<Our_stroy />} />
        <Route path="/A.i/News" element={<News />} />
        <Route path="/A.i/Tech" element={<Ai_tech />} />
        <Route path="/A.i/Job" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
}
}
export default App;
