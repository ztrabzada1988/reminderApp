import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
    }

    render() {
        return (
            <div className="App">
                <div className="title">Reminder App</div>
                <div className="form-inline">
                    <div className="form-group">
                        <input onChange={event => this.setState({text: event.target.value})} className="form-control" placeholder="I have to..."/>
                        <button onClick={() => this.addReminder()} type="button" className="btn btn-success">Add Reminder</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminder: state
    }
}

export default connect(mapStateToProps, {addReminder})(App);
