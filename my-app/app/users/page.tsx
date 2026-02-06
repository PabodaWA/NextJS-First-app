import React from 'react'

interface User {

    id: number;
  name: string;
 
}
const UsersPage = async () => {

  const res = fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = (await res).json();


  return (
    <div>
      UsersPage
    </div>
  )
}

export default UsersPage
