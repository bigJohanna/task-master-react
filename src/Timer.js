import React, {Component} from 'react'

//class component
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
            time: this.state.time + 1
        }), 1000)
    }

    stopTimer() {
        clearInterval(this.timer)
        this.props.reportNumber(this.state.time)
        this.resetTimer()
        //A function that I pass down through props to the child
        //when stopTimer is invoked, it "pulls the string" to invoke reportnumber and sends time tp parent
    }

    resetTimer = () => {
        this.setState({time:0})
    }


    render() {
        return (
            <tr>
                <td>timer: {this.state.time}</td>
                <td>
                    <button onClick={this.startTimer}>start</button>
                </td>
                <td>
                    <button onClick={this.stopTimer}>stop</button>
                </td>
            </tr>
        )
    }
}

export default Timer


