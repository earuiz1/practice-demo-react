import React, {useState}  from 'react';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/UserList'

function App() {

//Create an array to store the user object
const users = [];

const [user, setUser] = useState(users);

  const saveFormDataHandler = (passedData) => {
    //console.log(passedData);
    setUser(prevUsers => {
      return[passedData, ...prevUsers];
    })
  }

  return (
    <React.Fragment>
      <NewUser onSaveFormData = {saveFormDataHandler}></NewUser>
      <UserList userInfo = {user}></UserList>
    </React.Fragment>
  );
}

export default App;
