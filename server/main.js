import { Meteor } from 'meteor/meteor';

//Users
import { Mongo } from 'meteor/mongo'
let tblUsers = new Mongo.Collection('users')


//Insert tasks
import { taskCollection } from '../imports/api/TaskCollection'
const insertTask = function(taskText){
  taskCollection.insert({text: taskText})
}



Meteor.startup(() => {
  tblUsers.insert({name: 'Gustavo'})

  //Ins each task on collection
  if (taskCollection.find().count() === 0) {
    [
      'PRimeira tarefa',
      'Segunda Tarefa',
      'Teste'
    ].forEach(insertTask)
  }
});
