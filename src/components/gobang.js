import React from 'react';
import '../css/gobang.css';
class Square extends React.Component {//2种写法
  render() {
    return (
      <button className="square" onClick={()=>{this.props.onClick()}}>
        {this.props.value}
      </button>
    );
  }
}
/* function Square(props){
  return (
    <button className="square" onClick={props.onClick()}>
      {props.value}
    </button>
  );
} */
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(225).fill(null),
      xIsNext: true,
    };
    this.row=15;
    this.col=15;
    this.curIndex=0;
    this.winner=null;
  }

  handleClick=(i)=>{
    console.log(i);
    this.curIndex=i;
    const sq = this.state.squares.slice();
    sq[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState=>({squares:sq}));
    this.setState({
      squares: sq,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.state.squares[i]}
        onClick={()=>this.handleClick(i)}
      />
    );
  }
  renderRow(n){
    let item=[];
    for(let i=0;i<this.col;i++){
      item.push(this.renderSquare(n*this.col+i));
    }
    return (
      <div className="board-row">
        {item}
      </div>
    );
  }
  render() {
    let status="aa";
    if(checkWin(this.curIndex,this.state.squares)){
      status = (this.state.xIsNext ? '电脑':'你')+"赢了";
    } else {
      status = '轮到: ' + (this.state.xIsNext ? '你' : '电脑');
    }
    let list=[];
    for(let i=0;i<this.row;i++){
        list.push(this.renderRow(i));
    }
    return (
      <div>
        <div className="status">{status}</div>
        {list}
      </div>
    );
  }
}

export default class Gobang extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{"五子棋"}</div>
          <ol>{"完成基本功能"}</ol>
          <ol>{"重新开始，悔棋啥的，没挑战，就懒得处理了"}</ol>
          <ol>{"练习用的，懒得优化，凑合着看"}</ol>
        </div>
      </div>
    );
  }
}

// ========================================


function checkRow(n,square){
  let row=(n-n%15)/15;
  let col=n%15;
  let start=row*15+Math.max(col-4,0);
  let end=row*15+Math.max(col+4,14);
  for(let i=start;i<end-4;i++){
    let res="";
    for(let j=i;j<i+5;j++)res+=square[j];
    if(res==="XXXXX"||res==="OOOOO"){
      return true;
    }
  }
  return false;
}
function checkCol(n,square){
  let row=(n-n%15)/15;
  let col=n%15;
  let start=Math.max(row-4,0)*15+col;
  let end=Math.max(row+4,14)*15+col;
  for(let i=start;i<end-4;i+=15){
    let res="";
    for(let j=i,k=0;k<5;k++,j+=15)res+=square[j];
    if(res==="XXXXX"||res==="OOOOO"){
      return true;
    }
  }
  return false;
}
function checkBias(n,square){
  let row=(n-n%15)/15;
  let col=n%15;
  let s=4;
  let start=getStart(n,16);
  let end=getEnd(n,16);
  for(let i=start;i<end-4*16;i+=16){
    let res="";
    for(let j=i,k=0;k<5;k++,j+=16)res+=square[j];
    if(res==="XXXXX"||res==="OOOOO"){
      return true;
    }
  }
  let start2=getStart(n,14);
  let end2=getEnd(n,14);
  for(let i=start2;i<end2-4*14;i+=14){
    let res="";
    for(let j=i,k=0;k<5;k++,j+=14)res+=square[j];
    if(res==="XXXXX"||res==="OOOOO"){
      return true;
    }
  }
  return false;
}
function checkWin(n,square){
  if(checkRow(n,square)||checkCol(n,square)||checkBias(n,square))return true;
  return false;
}
function getStart(n,diff){
  let s=4;
  let start=n-diff*s;
  while(start<0){
    s--;
    start=n-diff*s;
  };
  return start;
}
function getEnd(n,diff){
  let s=4;
  let end=n+diff*s;
  while(end>225){
    s--;
    end=n+diff*s;
  }
  return end+1;
}