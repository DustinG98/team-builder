import React, { useState, useEffect } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


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

    const buttonText = (isEmpty(memberToEdit)) ? "Submit" : `Update ${memberToEdit.name}`;

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
            <Form onSubmit={event => handleSubmit(event)}>
                <FormGroup className="formGroup">
                    <Label className="formLabel" for="Name">Name</Label><br></br>
                    <hr></hr>
                        <Input
                            className="formInput"
                            placeholder="John Doe"
                            type="text"
                            name="name"
                            value={teamMember.name}
                            onChange={event => handleChange(event)}
                        />
                </FormGroup>
                <FormGroup className="formGroup">
                <Label className="formLabel" for="Email">Email </Label><br></br>
                <hr></hr>
                    <Input
                        className="formInput"
                        placeholder="abc@abc.com"
                        type="email"
                        name="email"
                        value={teamMember.email}
                        onChange={event => handleChange(event)}
                    />
                
                </FormGroup>
                <FormGroup className="formGroup">
                    <Label className="formLabel" for="Role">What is your role?</Label><br></br>
                    <hr></hr>
                    <Input className="formInput" type="select" value={teamMember.role} name="role" onChange={handleChange}>
                        <option defaultValue="">Select an option</option>
                        <option value="UI DEVELOPER">UI Developer</option>
                        <option value="REACT 1">React 1</option>
                        <option value="REACT 2">React 2</option>
                        <option value="BACKEND DEVELOPER">Backend Developer</option>
                    </Input>
                </FormGroup>
                <Button className="submitBtn">{buttonText}</Button>
            </Form>
        </div>
    )
}

export default TeamMemberForm