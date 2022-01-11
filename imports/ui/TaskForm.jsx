import React from 'react'
import { taskCollection, TaskCollection} from '../api/TaskCollection'

class TaskForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            text: ''
        }

        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    async handlerSubmit(e){
        e.preventDefault(); 
        if( !this.state.text) return;
         
        await taskCollection.insert({
            text:this.state.text.trim(),
            createdAt: new Date() 
        })  
        this.props.setTasks([...this.props.tasks, {
            text:this.state.text.trim(),
            createdAt: new Date() 
        } ])
        this.setState({text: ''})
        console.log(taskCollection.find({}).fetch())
    }  

    render(){ 
        return (
            <> 
            <form className='task_form' onSubmit={this.handlerSubmit}>
                <input onChange={(e)=>this.setState({text: e.target.value})}
                 value={this.state.text} type="text" placeholder='New Task' />
 
                <button type="submit">Add Task</button>
            </form>
            </>
        )
    }
}

export default TaskForm