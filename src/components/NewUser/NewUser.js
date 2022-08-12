import React from 'react'
import './NewUser.css'

import NewUserForm from './NewUserForm'

function NewUser(props) {
    const submitFormHandler = (submittedData) =>{
        const formData = {
          ...submittedData,
          id: Math.random().toString(),
        }
        //console.log(submittedData);
        props.onSaveFormData(formData);
      }
  return (
    <div className="form-card">
        <NewUserForm onSubmitForm = {submitFormHandler}></NewUserForm>
    </div>
  )
}

export default NewUser