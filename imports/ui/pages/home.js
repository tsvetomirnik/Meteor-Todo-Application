import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../../api/tasks.js';

// Components
import '../components/tasks-list.js';

// View
import './home.html';

Template.body.events({
  'submit .new-task': function (event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    if (!text) {
      return;
    }

    // Save task
    Meteor.call('tasks.insert', text);

    // Clear the input
    target.text.value = '';
  }
})