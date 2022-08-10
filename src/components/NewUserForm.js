import React, {useState} from "react";
import './NewUserForm.css';

function NewUserForm(props) {

const [username, setUsername] = useState('');
const [age, setAge] = useState('');

const usernameHandler = (event) => {
    //console.log(event.target.value);
    setUsername(event.target.value);
}

const ageHandler = (event) => {
    //console.log(event.target.value);
    setAge(event.target.value);
}

const submitHandler = (event) => {

    event.preventDefault();

     const user = {
        userName : username,
        userAge : age,
     }
     
     //console.log('In NewUser.js', user);

     props.onSubmitForm(user);

}
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-controls">
          <div className="form-control">
            <label>Username</label>
            <input type="text" onChange={usernameHandler} />
          </div>
          <div className="form-control">
            <label>Age(Years)</label>
            <input type="number" onChange={ageHandler}/>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;
