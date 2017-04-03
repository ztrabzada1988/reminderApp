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




function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder})(App);
