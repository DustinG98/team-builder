import React, { useState, useEffect } from 'react';


function TeamMemberForm(props){
    const [teamMember, setTeamMember] = useState({ id:0, name: '', email: '', role: '' });

    const memberToEdit = props.memberToEdit;

    function isEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
            return false;
        }
        return true;
    }

    const finishEdit = props.finishEdit;

    const handleSubmit = event => {
        event.preventDefault();
        setTeamMember({ name: '', email: '', role: '' });
        
        if(isEmpty(memberToEdit) === true) {
            props.addNewTeamMember(teamMember)
        } else {
            finishEdit(teamMember)
        }
    };

    const handleChange = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
      };

    useEffect(() => {
        if(isEmpty(memberToEdit) === true){
            setTeamMember({ name: '', email: '', role: '' });
        } else {
            setTeamMember({ id: [memberToEdit.id], name: [memberToEdit.name], email: [memberToEdit.email], role: [memberToEdit.role] });
        }
        
    }, [memberToEdit])

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