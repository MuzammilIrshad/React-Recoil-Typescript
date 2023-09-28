import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from './TodoList';



function TodoAddItem() {

    const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);
console.log(setTodoList)
  const addItem = () => {
    setTodoList((oldTodoList)=> [
      ...oldTodoList,
      {
        id: Math.random(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}


export default TodoAddItem
