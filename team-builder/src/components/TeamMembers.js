import React from 'react';
import { Card, Button, CardTitle, CardSubtitle } from 'reactstrap';

function TeamMembers(props){
    function setEditMember(member){
        props.editMember(member)
    }
    return (
        <div className="teamMembers">
            {props.members.map(member => {
                return <div className="teamMember" key={member.id}>
                    <Card body outline color="danger">
                        <CardTitle className="teamMemberName">{member.name}</CardTitle>
                        <CardSubtitle className="teamMemberRole">{member.role}</CardSubtitle>
                        <CardSubtitle className="teamMemberEmail">{member.email}</CardSubtitle>
                        <Button className="editBtn" color="danger" onClick={() => setEditMember(member)}>Edit</Button>
                    </Card>
                </div>
            })}
        </div>
    )
}


export default TeamMembers