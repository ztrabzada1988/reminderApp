import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies'; // saves update in cookies

const reminder = (action) => {
    // ES6 shortcut to replace text: action.text and dueDate: action.dueDate below
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state=[], id) => {
  // dont manipulate state. provide all the ids except the one we specify in a new array (filter)
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            console.log('reminders as state', reminders);
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders
        case CLEAR_REMINDERS:
            // to clear all reminders, simply return empty array
            reminders = [];
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders
