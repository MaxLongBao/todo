import React, { useState } from 'react';

import './list.css';

const List = (props) => {

  const { list, handleDelete } = props;
  
  const todos = list.map((todo, index) => {
    return (
      <div key={index} className='list'>
        <div className='todo'>
          {todo}
        </div>
        <div>
        <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      </div>
    )
  });

  return (
    <div>
      {todos}
    </div>
  );
};

export default List;