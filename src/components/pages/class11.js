import React,{Component} from 'react'
//import chapters12 from './chapters11'
import './stylelink.css'
export default class class11 extends Component
{
    
    render(){
        console.log(this.props)
        return(
            <div class="outer">
                <div><h1>CHAPTER NO. {this.props.match.params.id}</h1></div>
                
            <div><h1>CHAPTER NAME - {this.props.match.params.name}</h1></div>
            <div className="grid-box">
                
                {this.props.location.state.linkclass12.map(l=>{
                    return(
                        <div>
                        <h3>{l.topic}</h3>
                    <iframe title={l.link1} width="500" height="300" src={l.link1} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   </div>
                    )
                })} 
            </div>
            </div>
        )
    }
}