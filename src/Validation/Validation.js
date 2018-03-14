import React from 'react';

const Validation = ({ length }) => {
  let text = '';

  if (length > 5) {
    text = 'Text long enough'
  } else {
    text = 'Text too short'
  }

  return <p>{text}</p>
}

export default Validation
