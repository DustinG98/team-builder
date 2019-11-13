import React from 'react';

function TeamMembers(props){
    return (
        <div className="teamMembers">
            {props.members.map(member => {
                return <div className="teamMember" key={member.id}>
                    <h1>{member.name}</h1>
                    <p>{member.role}</p>
                    <h4>{member.email}</h4>
                </div>
            })}
        </div>
    )
}


export default TeamMembers