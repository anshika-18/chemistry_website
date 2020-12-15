import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.jpeg';
import './navbar.css'

export default class Navbar extends Component{
    
    render(){
    return (
        <div className="nav-side" >
    <nav className="navbar">

        <img className="logo" src={logo} alt="chemistry logo"></img>
        <ul className="nav-links">
            <li>
                <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li>
                <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li>
                <Link to="/notification" className="nav-link">NOTIFICATION</Link>
            </li>
        </ul>
       <Link to="/sign in" className="sign_in"> <button className="sign">Sign in</button></Link>
      
    </nav>

    </div>
    )}
} 
 