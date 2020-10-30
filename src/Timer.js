import React, {Component} from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
            time: this.state.time +1
        }), 1000)
        console.log(this.state.time)
    }
    stopTimer() {
        clearInterval(this.timer)
        console.log("stop")
    }


    render(){
            const {time} = this.state;
        return (
            <tr>
                <td>timer: {this.state.time}</td>
                <td><button onClick={this.startTimer}>start</button></td>
                <td><button onClick={this.stopTimer}>stop</button></td>
            </tr>
        )
    }
}

export default Timer


