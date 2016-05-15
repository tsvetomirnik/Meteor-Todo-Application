import { Template } from 'meteor/templating';
import { Tasks } from '../../api/tasks.js';

// Components
import '../components/task.js';

// View
import './tasks-list.html';

Template.tasksList.helpers({
  tasksCount: function () {
    return Tasks.find({}).count();
  },
  openTasksCount: function() {
     return Tasks.find({
       checked: { $not: true }
     }).count();
  },
  tasks: function() {
    return Tasks.find({}, {
      sort: {
        createdAt: -1
      }
    });
  }
});