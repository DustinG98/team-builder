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
      <Form addNewTeamMember={addNewTeamMember}/>
      <TeamMembers members={teamMembers}/>
    </div>
  );
}

export default App;
