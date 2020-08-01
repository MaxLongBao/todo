import React from 'react';

const List = (props) => {

  const { list, handleDelete } = props;
  
  const todos = list.map((todo, index) => {
    return (
      <div key={index}>
        {todo}
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