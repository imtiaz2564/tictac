//import React from 'react';
import React, { Component } from 'react';
import './Design.css' 

function Square(props) {
  return (
    <button className="square flex" onClick={ props.onClick }>
      { props.value }
    </button>
  );
}

export default Square;