import React from 'react';

const styles = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
}

const Char = ({ letter }) => {
  return <span style={styles}>{letter}</span>
}

export default Char
