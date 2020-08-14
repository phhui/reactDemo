import React,{Component} from 'react';
import {FaIcons,FaBeer} from 'react-icons/fa';
import Icons from './Icons';
import '../css/header.css';
export default class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="HeaderBox">
                <Title value={this.props.title} onClick={()=>this.props.onClick()} />
            </div>
        );
    }
}
class Title extends React.Component {
    
    render() {
      return (
        <div className="title" onClick={()=>{this.props.onClick()}}>
            <div className="title left" onClick={()=>this.props.onClick()}><Icons value={"Chevron-left"} /></div>
            <div className="title center">{/*this.props.value*/}</div>
            <div className="title right"><Icons value={"Justify"} /></div>
        </div>
      );
    }
  }