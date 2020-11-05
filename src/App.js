import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    //The stateobject will contain properties for everything you want to store in the state
    state = {
        characters: [],
    };

    render() {
        const {characters} = this.state;
        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter}
                       handleUpdateTime={this.handleTotalTime}/>
                <Form handleSubmit={this.handleSubmit}/>

            </div>
        )
    }

    removeCharacter = (index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    handleTotalTime = (time, index) => {

        const tasks = this.state.characters;
        tasks[index].time += time;
        this.setState({tasks: this.state});
    }


}


export default App