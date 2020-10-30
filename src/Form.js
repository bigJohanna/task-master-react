import React, {Component} from 'react'
class Form extends Component {
    initialState = {
        task: '',
        time: '00:00',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }


    render() {
        const {task, time} = this.state;

        return (
            <form>
                <label htmlFor="task">Task</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange}/>
                <label htmlFor="time">Time</label>
                <input
                    type="text"
                    name="time"
                    id="time"
                    value={time}
                    />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
}

export default Form