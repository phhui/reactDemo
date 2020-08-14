import React,{Component} from 'react';
import '../css/AppList.css';
export default class AppList extends Component {
    constructor(props){
        super(props);
        this.data=["gobang","todo"];
    }
    itemClick(i){
        console.log("click:"+i);
    }
    renderItem(){
        let list=[];
        this.data.map((item,i)=>{
            list.push(<ListItem key={i+1} value={item} onClick={()=>this.props.onClick(i+1)}/>);
        });
        return list;
    }
    render(){
        return (
            <div className="AppListBox">
                {this.renderItem()}
            </div>
        );
    }
}
class ListItem extends Component{
    render(){
        return (
        <div className="ListItem" onClick={this.props.onClick}>{this.props.value}</div>
        );
    }
}