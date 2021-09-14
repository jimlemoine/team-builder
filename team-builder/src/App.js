import React, { useState } from 'react';
import './App.css';
import TeamMemberForm from './components/Form';
import TeamMember from './components/TeamMember'

const teamMembersList = [
  { name: 'Casey', email: 'caseyemail', role: 'Designer'},
  { name: 'Tom', email: 'tomatwhatever', role: 'Front End Engineer'},
  { name: 'Bob', email: 'bobsemail', role: 'Back End Engineer'}
]

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState(teamMembersList);
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
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
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
