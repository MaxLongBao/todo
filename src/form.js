import React, {useState} from 'react';

const Form = (props) => {
  const { handleSubmit } = props;

  const [value, setValue] = useState('');
  console.log(value)

  return (
    <div>
      <form onSubmit={handleSubmit(value)} >
        <label>
          New Todo:
          <input type='text' name='todo' onChange={e => setValue(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default Form;