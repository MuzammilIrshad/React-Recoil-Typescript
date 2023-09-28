import React from 'react'
import { atom, useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';


export interface Items {
    id:number,
    text:string,
    isComplete:boolean
}
function TodoList() {

    const todoList = useRecoilValue(todoListState);
console.log(todoList)

  return (
    <div>
        {todoList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </div>
  )
}

export default TodoList;


export const todoListState = atom<Items[]>({
    key: 'TodoList',
    default: [],
  });