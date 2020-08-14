import React,{Component} from 'react';
import Icons from '../components/Icons';
import '../css/todo.css';
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
        console.log("receive:"+props0);
        let task=this.state.data.slice();
        task.push(props0);
        this.setState({
            data:task,
            viewState:0,
        });
    }
    renderItem(){
        let list=[];
        this.state.data.map((item,i)=>{
            console.log(item);
            list.push(<TodoItem key={i} value={item} onClick={()=>this.itemClick(i)}/>);
        });
        return list;
    }
    renderFloatView(){
        return this.state.viewState==0?<FloatUi onClick={()=>this.showAddView()}/>:<AddUi onClick={(data)=>this.addTodo(data)}/>;
    }
    render(){
        return (
            <div className="AppListBox">
                {this.renderItem()}
                {this.renderFloatView()}
            </div>
        );
    }
}
class TodoItem extends Component{
    render(){
        return (
            <div className="TodoItem">
                <div className="todoItemContent floatLeft">{this.props.value}</div>
                <div className="TodoItemBtn floatRight" onClick={this.props.onClick}><Icons value={"App"} /></div>
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
class AddUi extends Component{
    constructor(props){
        super(props);
        this.state={
            task:"",
        }
    }
    textChange(e){
        this.setState({
            task:e.target.value,
        });
    }
    render(){
        return (
            <div className="addPanel" >
                <div><input className="input" defaultValue={this.state.task} onChange={(e)=>this.textChange(e)} placeholder="添加任务"/></div>
                <div className="submitIcon" onClick={this.props.onClick.bind(this,this.state.task)}><Icons value={"ArrowUpSquareFill"} /></div>
            </div>
        );
    }
}