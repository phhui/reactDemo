import React,{Component} from 'react';
export default class Icons extends Component{
    constructor(props){
        super(props);
        this.iconDict={};
        //小于号/后退
        this.iconDict["Chevron-left"]=<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>;
        //右上角四行功能按钮
        this.iconDict["Justify"]=<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>;
    }
    renderIcon(name){
        return this.iconDict[name];
    }
    render(){
        return <div>{this.renderIcon(this.props.value)}</div>
    }
}