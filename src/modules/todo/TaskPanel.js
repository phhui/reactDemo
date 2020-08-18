import React,{Component} from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import Icons from '../../widdgets/Icons';
import List from '../../widdgets/List';
import './css/TaskPanel.css';
export default class TaskPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{isFinish:false,isImportance:false,task:null},
            task:null,
            end:null,
            repeat:null,
            remind:null,
            showPanel:0,
            target:0,
        }
        this.data=[["今天","明天","这周","选择日期"],["不重复","工作日","每天","每周","每年"],["今日晚些时候","明天","下周","选择日期"]];
    }
    textChange(e){
        let data=this.state.data;
        data["task"]=e.target.value;
        this.setState({
            data:data,
            task:e.target.value,
        });
    }
    showList(i){
        console.log(i);
        this.setState({
            showPanel:i+1,
            target:i
        });
    }
    endSelect(i){
        console.log(i);
        let data=this.state.data;
        let obj=null;
        let showCalendar=0;
        if(this.data[this.state.target][i]=="选择日期")showCalendar=4;
        if(this.state.target==0){
            data.end=this.data[this.state.target][i];
            obj={end:this.data[this.state.target][i],showPanel:showCalendar};
        }else if(this.state.target==1){
            data.repeat=this.data[this.state.target][i]
            obj={repeat:this.data[this.state.target][i],showPanel:showCalendar};
        }else if(this.state.target==2){
            data.remind=this.data[this.state.target][i]
            obj={remind:this.data[this.state.target][i],showPanel:showCalendar};
        }
        obj.data=data;
        this.setState(obj);
    }
    calendarClick(e){
        console.log(">>>date:"+e.toLocaleDateString());
        console.log(">>target:"+this.state.target);
        let data=this.state.data;
        if(this.state.target==0)data.end=e.toLocaleDateString();
        else data.remind=e.toLocaleDateString();
        data.showPanel=0;
        this.setState(data);
    }
    render(){
        function getStyle(i){
            let w=window.innerWidth;
            let left=i*w*0.33;
            let list={
                position: 'absolute',
                'borderRadius': '10px',
                bottom: '30px',
                left:left+'px',
                color:'#000000'
            };
            return list;
        }
        function getlistStyle(i){
            let listStyle={
                border: '1px solid #d4c7c7',
                backgroundColor:'#ffffff',
                width:'100px',
                height:i*30+'px',
            }
            return listStyle;
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
                <div className="submitIcon" onClick={this.props.onClick.bind(this,this.state.data)}><Icons value={"ArrowUpSquareFill"} size={"40px"} /></div>
                <div style={getStyle(0)}>{this.state.showPanel==1?<List styleClass={getlistStyle(this.data[0].length)} itemStyleClass={itemStyle} data={this.data[0]} onClick={(i)=>this.endSelect(i)} />:""}</div>
                <div style={getStyle(1)}>{this.state.showPanel==2?<List styleClass={getlistStyle(this.data[1].length)} itemStyleClass={itemStyle} data={this.data[1]} onClick={(i)=>this.endSelect(i)} />:""}</div>
                <div style={getStyle(2)}>{this.state.showPanel==3?<List styleClass={getlistStyle(this.data[2].length)} itemStyleClass={itemStyle} data={this.data[2]} onClick={(i)=>this.endSelect(i)} />:""}</div>
                <div className="Calendar">{this.state.showPanel==4?<Calendar onChange={(e)=>this.calendarClick(e)}/>:""}</div>
                <div className="setPanel">
                    <div className="setSpace" onClick={()=>this.showList(0)}>
                        <Icons value={"SquareFill"} text={this.state.end?"截止("+this.state.end+")":" 截至时间"} />
                    </div>
                    <div className="setSpace" onClick={()=>this.showList(1)}>
                        <Icons value={"ArrowRepeat"} text={this.state.repeat?this.state.repeat:" 重复"} />
                    </div>
                    <div className="setSpace" onClick={()=>this.showList(2)}>
                        <Icons value={"AlarmFill"} text={this.state.remind?this.state.remind:" 提醒"} />
                    </div>
                </div>
                <div><input className="input" onChange={(e)=>this.textChange(e)} placeholder="添加任务"/></div>
            </div>
        );
    }
}