import React, { Component } from 'react';
import '../styles/worklogger.css'

class TaskResult extends Component {

  constructor (props){

    super(props);
    
   } 
    
  convertTime=(minute,type)=>{
    var hours = Math.floor(minute / 60);  
    var minutes = minute % 60;
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    return hours + ":" + minutes;
 
  }


  calculateTotalTime=(projectType)=>{
    let totalTime=0;
    
    for (let i=0; i<this.props.tasks.length;i++){
       
        if(this.props.tasks[i].project=== projectType){
           
               totalTime=totalTime+parseInt(this.props.tasks[i].minutes);
           
        }
    }
    console.log("totaltime"+totalTime);
    let convertedTime=this.convertTime(totalTime)
    return convertedTime;
  }
  
  render() {
    const totalPersonalTime= this.calculateTotalTime("Personal");
    const totalWorkTime= this.calculateTotalTime("Work");
    const displayPersonalResults=this.props.tasks.map((item,index)=>{
        if(item.project==="Personal"){
            return (
                    <div key={index}>
                        <div className="minutediv">{this.convertTime(item.minutes,"Personal")}</div>
                        <div className="descriptiondiv">{item.description}</div>
                    </div>
            )
        }
        return null;
    }) 
    
    const displayWorkResults=this.props.tasks.map((item,index)=>{
        if(item.project==="Work"){
            return (
                    <div key={index}>
                        <div className="minutediv">{this.convertTime(item.minutes,"Work")}</div>
                        <div className="descriptiondiv">{item.description}</div>
                    </div>
            )
        }
        return null;
    }) 
    return (
           <div className="resultouterdiv">
           
                <div className="resultinnerdiv">
           
                    <div className="projectdiv">Personal</div>
                    <div className="minutediv">{totalPersonalTime}</div>
                    {displayPersonalResults}
                </div>
                    
           
           
                <div className="resultinnerdiv">
        
                    <div className="projectdiv">Work</div>
                    <div className="minutediv">{totalWorkTime}</div>
                    {displayWorkResults}
                </div>
           
           </div> 
           
    );
  }
}

export default TaskResult;