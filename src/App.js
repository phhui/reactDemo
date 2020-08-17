import React,{Component} from 'react';
import AppList from './components/AppList';
import Gobang from './modules/gobang/gobang';
import Todo from './modules/todo/Todo';
import Header from './components/header';
import './css/app.css';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"learn demo",
            content:<AppList onClick={(i)=>this.listClick(i)}/>
        };
        this.titleList=["learn demo","gobang","todo"];
        this.contentList=[<AppList onClick={(i)=>this.listClick(i)}/>,<Gobang />,<Todo />];
    }
    headClick(){
        this.setState({
            title:this.titleList[0],
            content:<AppList onClick={(i)=>this.listClick(i)}/>,
        });
    }
    listClick(i){
        this.setState({
            title:this.titleList[i],
            content:this.contentList[i],
        });
    }
    render(){
        return (
            <div>
                <Header title={this.state.title} onClick={()=>this.headClick()}/>
                <Content content={this.state.content} />
            </div>
        );
    }
}
class Content extends Component{
    render(){
        return (
            <div className="content">
                {this.props.content}
            </div>
        );
    };
}