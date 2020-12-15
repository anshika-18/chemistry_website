import React,{Component} from 'react'
import './sidebar.css'
import { chapters11,chapters12 } from '../pages/chapters11'
import { Link } from 'react-router-dom'

export default class sidebar extends Component{
    
    render(){
        return (
            
            <div className="menu-bars">
            
                <div className="head">CLASS 11 </div>
            <ul>
                {chapters11.map(chap=>{
                    return(
                        <li><Link to={{pathname:"/class11/"+chap.name+"/"+chap.id,state:{linkclass12:chap.link11 }}} className="chapter">{chap.name}</Link></li>
                       )
                })}
            </ul>
            <div className="head">CLASS 12 </div>
            <ul>
                {chapters12.map(chap=>{
                    return(
                        <li><Link to={{pathname:"/class12/"+chap.name+"/"+chap.id,state:{linkclass12:chap.link12 }}}    className="chapter">{chap.name}</Link></li>
                       )
                })}
            </ul>
        </div>
        )
    }
}