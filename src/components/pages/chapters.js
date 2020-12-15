import React,{Component} from 'react'

export default class chapters extends Component
{
    
    render(){
        console.log(this.props)
        return(
            <div>
                <div><h1>CHAPTER NO. {this.props.match.id}-14</h1></div>
            <div><h1>CHAPTER NAME - {this.props.match.params.name}</h1></div>
            </div>
        )
    }
}