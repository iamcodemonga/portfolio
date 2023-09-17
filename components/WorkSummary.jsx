import React from 'react'

const WorkSummary = ({ summary }) => {
    return (
        <ul>
            {summary && summary.map((doings, index) => <li key={index}><span style={{color: 'rgb(190, 190, 190)'}}>{doings}</span></li>)}
        </ul>
    )
}

export default WorkSummary