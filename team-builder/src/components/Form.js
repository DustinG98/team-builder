import React, { useState } from 'react';


function TeamMemberForm(props){
    const [teamMember, setTeamMember] = useState({ name: '', email: '', role: '' });


    const handleSubmit = event => {
        event.preventDefault();
        setTeamMember({ name: '', email: '', role: '' });
        props.addNewTeamMember(teamMember)
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
                <label>
                    What role are you?
                    <select value={teamMember.role} name="role" onChange={handleChange}>
                        <option defaultValue="">Select an option</option>
                        <option value="ui developer">UI Developer</option>
                        <option value="react 1">React 1</option>
                        <option value="react 2">React 2</option>
                        <option value="backend developer">Backend Developer</option>
                    </select>
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default TeamMemberForm