import React from 'react';
import './UserInput.css';

const UserInput = ({onChange, value}) => <input type="text" name="UserInput" className="UserInput" onChange={onChange} value={value} />

export default UserInput;
