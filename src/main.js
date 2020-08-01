import React, { useState } from 'react';
import List from './list';
import Form from './form';

const Main = () => {

  const [list, setList] = useState([]);

  const handleSubmit = (value) => {
    console.log(value);
  };

   return (
      <div>
        <Form handleSubmit={handleSubmit}/>
        <List />
      </div>
   );
};

export default Main;