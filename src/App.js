import React from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import './App.css';
import Sidebar from './components/navbar/sidebar'
import Mininavbar from './components/navbar/mininavbar'
import Home from './components/pages/home'
import About from './components/pages/about'
import Notification from './components/pages/notification'
import class11 from './components/pages/class11'
import class12 from './components/pages/class12'
import Signin from './components/pages/signin'

function App() {
  return (
    <div>
      <Router>
        <div className="to-navfix">
        <Navbar />
        <Mininavbar />
        </div>
        <div className="switch">
        <Sidebar />
        <Route path='/' exact component={Home}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/notification' component={Notification}></Route>
          <Route path='/class11/:name/:id' component={class11}></Route>
          <Route path='/class12/:name/:id' component={class12}></Route>
          <Route path='/sign in' component={Signin}></Route>
        </div>
        </Router>
        </div>
  );
}

export default App;