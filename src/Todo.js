/* eslint-disable react/prop-types */
import React from 'react';

export default function Todo({ todoList, remove }) {
  return (
    <div className='todo-wrapper'>
      {todoList.map((item, index) => (
        <Todos
          // added key prop
          key={index.toString()}
          item={item}
          index={index}
          remove={remove}
        />
      ))}
    </div>
  );
}

function Todos({ item, index, remove }) {
  return (
    <div className='todo-container'>
      <p style={{ textDecoration: item.isCompleted ? 'line-through' : '' }}>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() => remove(index)}
        />

        {item.text}
      </p>
    </div>
  );
}
