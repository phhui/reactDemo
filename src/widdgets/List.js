/**简单封装的一个List
 * 用法：
 * import List from '../widdgets/List';
 * //三种用法
 * 1.<List data={this.state.data} onClick={(i)=>this.itemClick(i)} />//使用默认的ListItem和样式
 * 2.<List listStyle={ListStyle} itemStyle={ItemStyle} data={this.state.data} onClick={(i)=>this.itemClick(i)} />//使用默认的ListItem，自定义样式
 * 3.<List itemClass={ListItem} data={this.state.data} />//自定义ListItem
 */
import React,{Component} from 'react';
import '../css/List.css';
export default class List extends Component {
    constructor(props){
        super(props);
    }
    renderItem(){
        let list=[];
        this.props.data.map((item,i)=>{
            if(this.props.itemClass)list.push(<this.props.itemClass key={i} data={this.props.data} />);
            else if(this.props.itemStyleClass!=null) list.push(<ListItem itemStyleClass={this.props.itemStyleClass} key={i} value={item} onClick={()=>this.props.onClick(i)}/>);
            else list.push(<ListItem className={"ListItem"} key={i} value={item} onClick={()=>this.props.onClick(i)}/>);
        });
        return list;
    }
    render(){
        return (
            (this.props.styleClass!=null)?
            <div style={this.props.styleClass}>
                {this.renderItem()}
            </div>:
            <div className={"AppListBox"}>
                {this.renderItem()}
        </div>
        );
    }
}
class ListItem extends Component{
    render(){
        return (
            (this.props.itemStyleClass!=null)?<div style={this.props.itemStyleClass} onClick={this.props.onClick}>{this.props.value}</div>:<div className={this.props.className} onClick={this.props.onClick}>{this.props.value}</div>
        );
    }
}