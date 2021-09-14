import React, { useState } from 'react';
import './App.css';
import TeamMemberForm from './components/Form';
import TeamMember from './components/TeamMember'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers([newTeamMember, ...teamMembers]);
  }


  return (
    <div className='container'>
      <h1>Jim's Team Member Form!!!</h1>
      
      <TeamMemberForm 
      update={updateForm} 
      submit={submitForm} 
      values={formValues} 
      />

      {
        teamMembers.map((teamMember, index) => {
          return (
            <TeamMember 
            key={index} 
            details={teamMember} 
            />
          )
        })
      }
    </div>
  );
}
