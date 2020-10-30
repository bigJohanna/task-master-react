import React, {Component} from 'react'

class Timer extends Component{
    startTimer() {
        console.log("start")
    }
    stopTimer() {
        console.log("stop")
    }
    resetTimer() {
        console.log("reset")
    }

    render(){
        return (
            <tr>
                <td>timer: </td>
                <td><button>start</button></td>
                <td><button>stop</button></td>
            </tr>
        )
    }
}

export default Timer



