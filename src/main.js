import React, { useState } from 'react';
import List from './list';
import Form from './form';

const Main = () => {

  const [list, setList] = useState([]);

  const addTodo = (value) => {
    const newList = [...list, value];
    setList(newList);
  };

  const handleDelete = (index) => {
    console.log(index)
    const newList = list.filter(todo => list[index] !== todo);
    setList(newList)
  };
  
  return (
      <div>
        <List list={list} handleDelete={handleDelete}/>
        <Form addTodo={addTodo}/>
      </div>
   );
};

export default Main;