import React from 'react'

const Pills = ({ technologies }) => {
    return (
        <div className="mb-3">
            {technologies && technologies.map((tech, index) => <span className="badge bg-dark me-2" key={index}>{tech}</span>)}
            <span className="badge bg-dark me-2" />
        </div>
    )
}

export default Pills