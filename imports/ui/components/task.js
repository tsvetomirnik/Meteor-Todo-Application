import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../../api/tasks.js';

// View
import './task.html';

Template.task.events({
  // Deletes the task
  'click .btn-delete': function (event) {
    Meteor.call('tasks.remove', this._id);
  },
  
  // Updates the checked state of the task
  'click .toggle-checked': function (event) {
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  }
});