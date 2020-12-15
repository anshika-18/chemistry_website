import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import {chapters11,chapters12} from './chapters11'
export default class home extends Component{
    display11(){
        const clas=document.querySelector('.class11');
        const hell1=document.querySelector('.hell1')
        const hell2=document.querySelector('.hell2')
        clas.addEventListener('click',function(){
            hell1.style.display="block";
            hell2.style.display="none";
        })
    }
    display12(){
        const clas=document.querySelector('.class12');
        const hell2=document.querySelector('.hell2')
        const hell1=document.querySelector('.hell1')
        clas.addEventListener('click',function(){
            hell1.style.display="none";
            hell2.style.display="block";
        })
    }
    render(){
        return(
            <div className="outer-home">
            <div className="home">
                <button className="class11" onClick={this.display11} >CLASS 11<sup>th</sup></button>
                <div ></div>
                <button className="class12" onClick={this.display12}>CLASS 12<sup>th</sup></button>
        
            </div>
            <ul className="hell1">{chapters11.map(chap=>{
                return(
                 <li><Link to={"/class11/"+chap.name+"/"+chap.id} className="chapter-link" >{chap.name}</Link></li>
                )
            })}
            </ul> 
            <ul className="hell2">{chapters12.map(chap=>{
                return(
                 <li><Link to={"/class12/"+chap.name+"/"+chap.id} className="chapter-link" >{chap.name}</Link></li>
                )
            })}
            </ul>
                   
            </div>
        )
    }
}
