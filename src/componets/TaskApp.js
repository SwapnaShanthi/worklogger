import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskResult from './TaskResult'


class TaskApp extends Component {

  constructor(props){
     super(props);
     this.state={tasks:[],
                 descriptionErrorMessage:"",
                 minuteErrorMessage:"",
                 totalPersonalTime:"",
                 totalWorkTime:"" }
  }

  
  calculateTotalTime=()=>{
    console.log("hi");
   for (let i=0; i<this.state.tasks.length;i++){
       console.log(this.state.tasks[i]);
       if(this.state.tasks[i].project==="Personal"){
           console.log("project");
       }
   }

  }
  addTask = (newTask) => {

   // let time= this.convertTime(newTask);
   // newTask.minutes=time;
    
    
    this.setState({descriptionErrorMessage:newTask.descriptionErrorMessage});
    this.setState({descriptionErrorMessage:newTask.descriptionErrorMessage});
    this.setState({
        tasks: [...this.state.tasks, newTask]

    })
    //this.calculateTotalTime();
}
  render() {
    return (
      <div >
          <div>
             <TaskForm addTask={this.addTask}/>
          </div>
          <div>
             <TaskResult tasks={this.state.tasks}/> 
            
          </div>
      </div>
    );
  }
}

export default TaskApp;