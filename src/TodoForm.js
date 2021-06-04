/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [val, SetVal] = useState('');
  const handleChange = (e) => {
    SetVal(e.target.value);
  };
  const handleEvent = (e) => {
    e.preventDefault();
    addTodo(val);
    SetVal('');
  };

  return (
    <div className='todo-form'>
      <form onSubmit={handleEvent}>
        <input
          className='input'
          type='text'
          onChange={handleChange}
          placeholder='Add a Todo'
          value={val}
          required
        ></input>
        <input type='submit' value='Add'></input>
      </form>
    </div>
  );
}

export default TodoForm;
