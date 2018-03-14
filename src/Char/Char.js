import React from 'react';

const styles = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
}

const Char = ({ letter, onClick }) => {
  return <span style={styles} onClick={onClick}>{letter}</span>
}

export default Char
