import React,{Component} from 'react'
import './signin.css'
export default class signin extends Component{
    render(){
        return(
            <div className="about">
               <h1>intro to node and mongo</h1>
        <form method="POST" action="/addname">
        <label>Enter your first name</label>
        <input type="text" name="firstName" placeholder="enter first name.." required />
        <input type="submit" value="Add name" />
        </form>
            </div>
        )
    }
}