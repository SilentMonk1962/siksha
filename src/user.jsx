import React from 'react';
const User = (props)=> {
    const {data}=props
    return(
    
    <div>
        <h1>User component goes below</h1>
        <h2>{`Hi, Current user name is ${data.name}`}</h2>
        <h2>{`His age is ${data.age}`}</h2>
    </div>
)};

export default User;