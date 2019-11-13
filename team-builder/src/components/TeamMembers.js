import React from 'react';

function TeamMembers(props){
    function setEditMember(member){
        props.editMember(member)
    }
    return (
        <div className="teamMembers">
            {props.members.map(member => {
                return <div className="teamMember" key={member.id}>
                    <h1>{member.name}</h1>
                    <p>{member.role}</p>
                    <h4>{member.email}</h4>
                    <button onClick={() => setEditMember(member)}>Edit</button>
                </div>
            })}
        </div>
    )
}


export default TeamMembers