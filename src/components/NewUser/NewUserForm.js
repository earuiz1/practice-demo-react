import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./NewUserForm.css";


function NewUserForm(props) {
  
  //Setting states for username and age
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  //Set a state for the modal status (show/hide)
  const [showModal, setShowModal] = useState(false);

  //Set a state to handle dynamic error msgs
  const [error, setError] = useState({
    header: '',
    body: '',
  });

  const usernameHandler = (event) => {
    //console.log(event.target.value);
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    //console.log(event.target.value);
    setAge(event.target.value);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  }

 
  const submitHandler = (event) => {
    
    /* It prevents the default behavior of the form, which is to refresh the page. */
    event.preventDefault();

    /* Form Validation */

    // Check if any of the inputs are empty upon submission
    if(username.trim().length === 0 || age.trim().length === 0) {
      setShowModal(true);
      setError({
        header: 'Invalid Input (Empty)',
        body: 'Empty fields, please enter a valid input!'
      })
      return;
    }

    /* Checking if the age is less than or equal to zero. */
    if(+age <= 0) {
      setShowModal(true);
      setError({
        header: 'Invalid Age',
        body: 'Invalid Age, it must be greater or equal to 1'
      })
      return;
    }

   /* Creating an object with the username and age. */
    const user = {
      userName: username,
      userAge: age,
    };

    //console.log('In NewUser.js', user);
    props.onSubmitForm(user);

    //Clear the inputs using two-way binding
    setUsername("");
    setAge("");
  };

  return (
    <div>
      {showModal === true && <ErrorModal closeModal = {closeModalHandler} headerMsg = {error.header} bodyMsg={error.body}/>}
      <form onSubmit={submitHandler}>
        <div className="form-controls">
          <div className="form-control">
            <label>Username</label>
            <input type="text" onChange={usernameHandler} value={username} />
          </div>
          <div className="form-control">
            <label>Age(Years)</label>
            <input type="number" onChange={ageHandler} value={age} />
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;
