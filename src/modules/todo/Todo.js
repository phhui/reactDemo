import React,{Component} from 'react';
import Icons from '../../widdgets/Icons';
import List from '../../widdgets/List';
import TaskPanel from './TaskPanel';
import './css/todo.css';
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            viewState:0,
        };
    }
    itemClick(i){
        console.log("click:"+i);
        let task=this.state.data.slice();
        task.shift(i,1);
        this.setState({
            data:task
        });
    }
    showAddView(){
        this.setState({
            viewState:1,
        });
    }
    addTodo(props0){
        if(props0.length<1)return;
        console.log("receive:"+props0);
        let task=this.state.data.slice();
        task.push(props0);
        this.setState({
            data:task,
            viewState:0,
        });
    }
    render(){
        return (
            <div className="AppListBox">
                {<List itemClass={TodoItem} data={this.state.data} />}
                {this.state.viewState==0?<FloatUi onClick={()=>this.showAddView()}/>:<TaskPanel onClick={(data)=>this.addTodo(data)}/>}
            </div>
        );
    }
}
class TodoItem extends Component{
    render(){
        return (
            <div className="TodoItem">
                <div className="todoItemContent floatLeft">{this.props.data}</div>
                <div className="TodoItemBtn floatRight" onClick={this.props.onClick}><Icons value={"App"} size={'28px'} /></div>
            </div>
        );
    }
}
class FloatUi extends Component{
    render(){
        return (
            <div className="FloatUi" onClick={this.props.onClick}>
                <div className="FloatUi shape" >+</div>
            </div>
        );
    }
}