import React from 'react'
import Timer from './Timer'

//functional components har inte koll på sitt eget state
//de håller inte reda på local state, de bara får nya props och rerender based on those

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Task</th>
            <th>Time</th>
        </tr>
        </thead>
    )
};

const TableBody = (props) => {
    //when passing down props from parent
    //when we invoke function we pull the string
//    const handleTotalTime = (time) =>{
//        props.updateTime(time)
//    }
    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.task}</td>
                <td>{row.time}</td>
                <td><Timer reportNumber={(time) => props.updateTime(time, index)}/></td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete task</button>
                </td>

            </tr>
        )
    });
    //return row instead of body (tableRowComponent)
    return <tbody>{rows}</tbody>
};

//istället för tablebody use row as component
const Table = (props) => {
    const {characterData, removeCharacter, handleUpdateTime} = props;

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} updateTime={handleUpdateTime}/>
        </table>
    )
};

export default Table