import React from 'react'
import UserItem from './UserItem';

function UserList(props) {
  return (
    <React.Fragment>
        {props.userInfo.map(u => <UserItem key={u.id} id={u.id} username={u.userName} age={u.userAge}></UserItem>)}
    </React.Fragment>
  )
}

export default UserList;