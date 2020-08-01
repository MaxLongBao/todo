import React, {useState} from 'react';

const Form = (props) => {

  const { addTodo } = props;

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>
          New Todo:
          <input 
            type='text' 
            name='todo' 
            value={value} 
            onChange={e => setValue(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Form;