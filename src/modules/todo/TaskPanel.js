import React,{Component} from 'react';
import Icons from '../../widdgets/Icons';
import List from '../../widdgets/List';
import './css/TaskPanel.css';
import Calendar from 'react-calendar';
export default class TaskPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            task:"",
            endDate:"",
            repeat:"",
            remind:false,
            showPanel:0,
            showEndList:false,
            showRepeatList:false,
            showRemindList:false,
            showCalendar:false,
        }
        this.endData=["今天","明天","这周","选择日期"];
        this.repeatData=["今日晚些时候","明天","下周","选择日期"];
        this.remindData=["每天","工作日","每周","每年"];
    }
    textChange(e){
        this.setState({
            task:e.target.value,
        });
    }
    showList(i){
        console.log(i);
        this.setState({
            showPanel:i+1
        });
    }
    endSelect(i){
        console.log(i);
        this.setState({
            showPanel:i<3?0:4
        });
    }
    calendarClick(e){
        console.log(e);
        this.setState({
            showPanel:0
        });
    }
    render(){
        const listStyle={
            border: '1px solid #d4c7c7',
            backgroundColor:'#ffffff',
            width:'100px',
            height:'120px',
        };
        const itemStyle={
            'backgroundColor': 'white',
            color: '#666666',
            'borderRadius': '3px',
            margin: '0px 0px -1px 0px',
            width: 'auto',
            height:'30px',
            'textAlign': 'center',
            'lineHeight':'30px',
        };
        return (
            <div className="TaskPanel" >
                <div className="submitIcon" onClick={this.props.onClick.bind(this,this.state.task)}><Icons value={"ArrowUpSquareFill"} size={"40px"} /></div>
                <div className="endDateList">{this.state.showPanel==1?<List styleClass={listStyle} itemStyleClass={itemStyle} data={this.endData} onClick={(i)=>this.endSelect(i)} />:""}</div>
                <div className="repeatList">{this.state.showPanel==2?<List styleClass={listStyle} itemStyleClass={itemStyle} data={this.repeatData} onClick={(i)=>this.endSelect(i)} />:""}</div>
                <div className="remindList">{this.state.showPanel==3?<List styleClass={listStyle} itemStyleClass={itemStyle} data={this.remindData} onClick={(i)=>this.endSelect(i)} />:""}</div>
                <div className="Calendar">{this.state.showPanel==4?<Calendar onChange={(e)=>this.calendarClick(e)}/>:""}</div>
                <div className="setPanel">
                    <div className="setSpace" onClick={()=>this.showList(0)}>
                        <Icons value={"SquareFill"} text={" 截至时间"} />
                    </div>
                    <div className="setSpace" onClick={()=>this.showList(1)}>
                        <Icons value={"ArrowRepeat"} text={" 重复"} />
                    </div>
                    <div className="setSpace" onClick={()=>this.showList(2)}>
                        <Icons value={"AlarmFill"} text={" 提醒"} />
                    </div>
                </div>
                <div><input className="input" onChange={(e)=>this.textChange(e)} placeholder="添加任务"/></div>
            </div>
        );
    }
}