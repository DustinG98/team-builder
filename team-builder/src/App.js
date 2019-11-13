import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TeamMembers from './components/TeamMembers'

function App() {
  const [teamMembers, addTeamMember] = useState([
    {
      id: 1,
      name: "Dustin",
      email: "thedustingraham@gmail.com",
      role:
        "react 1"
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState({});

  const editMember = teamMember => {
    setMemberToEdit(teamMember)
  }

  const finishEdit = editedMember => {
    teamMembers.map(member => {
      if(member.id === editedMember.id[0]) {
        
        member.name = editedMember.name;
        member.email = editedMember.email;
        member.role = editedMember.role;
        setMemberToEdit({})
      } return null;
    })
  }

  

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    }
    addTeamMember([...teamMembers, newTeamMember])
  }
  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember} memberToEdit={memberToEdit} finishEdit={finishEdit} setMemberToEdit={setMemberToEdit} />
      <TeamMembers members={teamMembers} editMember={editMember} />
    </div>
  );
}

export default App;
