import React, { useState } from 'react';
import './App.css';
import Form from './Form'

function App() {
  const [teamMembers, addTeamMember] = useState([])
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
