import React, { useState } from 'react';
import List from './list';
import Form from './form';

const Main = (props) => {

  const [list, setList] = [];

   return (
      <div>
        <Form />
        <List />
      </div>
   )
};

export default Main;