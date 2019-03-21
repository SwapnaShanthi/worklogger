import React, { Component } from 'react';


class TaskForm extends Component {
  constructor(props){
     super(props);
     this.state={project:"Personal",
                 description:"",
                 minutes:"",
                 descriptionErrorMessage:"",
                 minuteErrorMessage:""
                }

  }   
  validateForm=(name,value)=>{
  
    if(name==="description"){
       
        if(typeof(value)==='string' && value.length>0){
           
            
            if(value.length>=6){
                
                return true;
            }else{
                
                return false;
            }
        }else{
            return false;
        }

    }else if(name==="minutes"){
       
        if( value!==""){
            var integer = parseInt(value, 10);

            if(integer>0 && integer<241){
                return true;
            }else{
                return false;
            }
        }else{
            
            return false;
        }


    }


  }

  

  handleChange=(e)=>{

    this.setState({[e.target.name]:e.target.value});

    if(!this.validateForm(e.target.name,e.target.value)){
        if(e.target.name === "description"){
          this.setState({ descriptionErrorMessage: "Description Vaidation errors here" });
     

        }else if(e.target.name === "minutes"){
           this.setState({ minuteErrorMessage: "Minute Vaidation errors here" });
     
        }

    }else{

      if(e.target.name === "description"){
          this.setState({ descriptionErrorMessage: "" });
     

        }else if(e.target.name === "minutes"){
           this.setState({ minuteErrorMessage: "" });
     
        }



    }
    

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask({project: this.state.project,description:this.state.description,minutes:this.state.minutes });
    this.setState({ project: "Personal" });
    this.setState({ description: "" });
    this.setState({ minutes: "" });
  }


  render() {

    const displaySubmitButton=()=>{
            
        if(this.state.descriptionErrorMessage !=="" ||this.state.minuteErrorMessage!== ""){
           
            return <input  className="buttonstyle" type="submit" value="Add" disabled/>


        }else if(this.state.descriptionErrorMessage ==="" && this.state.minuteErrorMessage=== "" && this.state.description==="" && this.state.minutes==="" && this.state.project===""){

            return <input  className="buttonstyle" type="submit" value="Add" disabled/>
        }else if(this.state.descriptionErrorMessage ==="" && this.state.minuteErrorMessage=== "" && (this.state.description==="" || this.state.minutes==="" || this.state.project==="")){
            return <input  className="buttonstyle" type="submit" value="Add" disabled/>
        }else{
            return <input  className="buttonstyle" type="submit" value="Add" />
        }
    }

    return (
       <div className="formdiv">
            <h2>Work Logger</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="innerformdiv">
               <div className="projectformdiv">

                    <label className="labelform">
                    Project
                    </label>
                    <select className="selectstyle" value={this.state.project} name="project" onChange={this.handleChange}>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                    </select>
                    <div className="errorlabel"><label>{this.state.descriptionErroMessage}</label></div>
                
                </div>
                <div className="descriptionformdiv">

                    <label className="labelform">Description</label>
                    
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    
                    <div className="errorlabel"><label>{this.state.descriptionErrorMessage}</label></div>

                </div>
                <div className="minuteformdiv">

                    <label className="labelform"> Minutes</label>
                   
                    <input type="number" name="minutes" value={this.state.minutes} onChange={this.handleChange} />


                    <div className="errorlabel"><label>{this.state.minuteErrorMessage}</label></div>
                
                </div>
                 <div >
                  {displaySubmitButton()}
                </div>
              </div>  
        </form>
      </div>
      
    );
  }
}

export default TaskForm;