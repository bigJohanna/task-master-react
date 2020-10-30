import React, {Component} from 'react'
class Form extends Component {
    initialState = {
        task: '',
        time: 0,
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    render() {
        const {task} = this.state;

        return (
            <form>
                <label htmlFor="task">Task</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }

}

export default Form