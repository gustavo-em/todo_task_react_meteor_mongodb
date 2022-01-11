import React from 'react';
import Task from './Task';

import TaskForm from './TaskForm'

import { taskCollection } from '../api/TaskCollection'

export const App = () => {
   

  //Hooks tasks
  let [tasks, setTasks] = React.useState([])
 
  React.useEffect(() => {
    setTasks(taskCollection.find({}, { sort: { createdAt: -1 }}).fetch())
  }, [])

  return (
    <div>  
      <h1>Welcome to Meteor!</h1> 

      <TaskForm setTasks={setTasks} tasks={tasks}/>
 
      <ul style={{
        display: 'flex', 
        flexWrap: 'wrap'
      }}>
        {tasks.map(task =>   
   
          <Task key={task.text} nomeTask={task.text}/> 
        )}
      </ul>
    </div> 
  )
};
