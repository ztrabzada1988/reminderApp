import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        console.log('this.state.dueDate', this.state.dueDate);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
      this.props.deleteReminder(id)
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                  <div className="list-item item-name">{reminder.text}</div>
                                  <div className="list-item due-date"><strong><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></strong></div>
                                </div>
                                <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}>&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">Reminder App</div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input onChange={event => this.setState({text: event.target.value})} className="form-control" placeholder="I have to..." />
                        <input onChange={event => this.setState({dueDate: event.target.value})} className="form-control" type="datetime-local" />
                    </div>
                    <button onClick={() => this.addReminder()} type="button" className="btn btn-success">Add Reminder</button>
                </div>
                    { this.renderReminders() }
                    <div className="btn btn-danger" onClick={() => this.props.clearReminders()}>Clear Reminders</div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        reminders: state
    }
}
// ES6 mapDispathToProps replaced with {addReminder}
export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
