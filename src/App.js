import React,{Component} from 'react';
import AppList from './components/AppList';
import Gobang from './components/gobang';
import Todo from './todo/todo';
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
    }
    headClick(){
        this.setState({
            title:this.titleList[0],
            content:<AppList onClick={(i)=>this.listClick(i)}/>,
        });
    }
    listClick(i){
        console.log(i);
        let ct="";
        switch(i){
            case 0:
                ct=<AppList onClick={(i)=>this.listClick(i)}/>;
            break;
            case 1:
                ct=<Gobang />;
            break;
            case 2:
                ct=<Todo />;
            break;
        }
        this.setState({
            title:this.titleList[i],
            content:ct,
        });
    }
    renderContent(){

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