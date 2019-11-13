import React, { useState } from 'react';


function TeamMemberForm(){
    const [teamMember, setTeamMember] = useState({ name: '', email: '', role: '' });

    const handleSubmit = event => {
        event.preventDefault();
        setTeamMember({ name: '', email: '', role: '' });
    };

    const handleChange = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
      };

    return (
        <div className="Form">
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={teamMember.name}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={teamMember.email}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default TeamMemberForm