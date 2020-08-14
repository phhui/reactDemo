import React,{Component} from 'react';
import '../css/todo.css';
export default class Todo extends Component {
    constructor(props){
        super(props);
    }
    itemClick(i){
        console.log("click:"+i);
    }
    renderItem(){
        let list=["english","react"];
        this.data.map((item,i)=>{
            list.push(<TodoItem key={i} value={item} onClick={()=>this.props.onClick(i)}/>);
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
class TodoItem extends Component{
    render(){
        return (
        <div className="TodoItem" onClick={this.props.onClick}>{this.props.value}</div>
        );
    }
}