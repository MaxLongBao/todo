import React, { useState } from 'react';
import List from '../list';
import Form from '../form';

const Main = () => {

  const [list, setList] = useState([]);

  const addTodo = (value) => {
    const newList = [...list, value];
    setList(newList);
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
      <div>
        <List list={list} handleDelete={handleDelete}/>
        <Form addTodo={addTodo}/>
      </div>
   );
};

export default Main;