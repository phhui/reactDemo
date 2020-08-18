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
    itemClick(i,item,param){
        console.log("click:"+i+","+param);
        let task=this.state.data.slice();
        if(param=="finish")item.isFinish=true;
        else if(param=="importance")item.isImportance=true;
        task[i]=item;
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
        if(!props0||props0.length<1)return;
        console.log("receive:"+JSON.stringify(props0));
        let task=this.state.data.slice();
        task.push(props0);
        this.setState({
            data:task,
            viewState:0,
        });
    }
    render(){
        return (
            <div className="TodoBox">
                {<List itemClass={TodoItem} data={this.state.data} onClick={(i,item,param)=>this.itemClick(i,item,param)}/>}
                {this.state.viewState==0?<FloatUi onClick={()=>this.showAddView()}/>:<TaskPanel onClick={(data)=>this.addTodo(data)}/>}
            </div>
        );
    }
}
class TodoItem extends Component{
    renderAttr(){
        return <div>
                    {this.props.data.end?<div className="TodoAttrBox"><Icons value={"SquareFill"} text={this.props.data.end} /></div>:""}
                    {this.props.data.repeat?<div className="TodoAttrBox"><Icons value={"ArrowRepeat"} text={this.props.data.repeat} /></div>:""}
                    {this.props.data.remind?<div className="TodoAttrBox"><Icons value={"AlarmFill"} text={this.props.data.remind} /></div>:""}
                </div>;
    }
    render(){
        return (
            <div className="TodoItem">
                <div className="TodoItemIcon TodoFinish floatLeft" onClick={this.props.onClick.bind(this,"finish")}><Icons value={this.props.data.isFinish?"CheckSquare":"App"}  size={'30px'}/></div>
                <div className="TodoItemTitle floatLeft">{this.props.data.isFinish?<s>{this.props.data.task}</s>:this.props.data.task}</div>
                <div className="TodoItemIcon TodoImportance floatRight" onClick={this.props.onClick.bind(this,"importance")}><Icons value={this.props.data.isImportance?"StarFill":"Star"} size={'30px'} /></div>
                <div className="TodoAttr">{this.renderAttr()}</div>
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