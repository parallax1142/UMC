import React, {useState} from "react";
import './ToDoList.css'

const ToDoList = () => {

    const [toDoList, setToDoList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [inputToDo, setInputToDo] = useState('');

    // input 값 변경
    const handleInputChange = (event) => {
        setInputToDo(event.target.value);
    };

    // 할 일 추가
    const handleAddTodo = (event) => {
        if (event.key === 'Enter' && inputToDo.trim() !== '') {
          setToDoList(prevToDoList => [
            ...prevToDoList,
            {
              id: inputToDo
            }
          ]);
          setInputToDo(''); // 입력값 초기화
        }
    };

    // 완료된 할 일로 이동 함수
    const handleCompleteTodo = (todo) => {
        setToDoList(prevToDoList => prevToDoList.filter(item => item.id !== todo.id));
        setCompletedList(prevCompletedList => [
        ...prevCompletedList,
        todo
        ]);
    };

    // 한 일 삭제 함수
    const handleDeleteCompleted = (completed) => {
        setCompletedList(prevCompletedList => prevCompletedList.filter(item => item.id !== completed.id));
    };

    return (
        <div>
          <h1>UMC Study Plan</h1>
          {/* 할 일 입력란 */}
          <input 
            type="text"
            value={inputToDo}
            onChange={handleInputChange}
            onKeyPress={handleAddTodo}
          />
    
          {/* 해야 할 일 목록 */}
          <div className="list">
            <p>해야 할 일</p>
            <ul>
              {toDoList.map(todo => (
                <li key={todo.id}>
                  {todo.id}
                  <button onClick={() => handleCompleteTodo(todo)}>완료</button>
                </li>
              ))}
            </ul>
          </div>
    
          {/* 한 일 목록 */}
          <div className="list">
            <p>해낸 일</p>
            <ul>
              {completedList.map(completed => (
                <li key={completed.id}>
                  {completed.id}
                  <button onClick={() => handleDeleteCompleted(completed)}>삭제</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

  export default ToDoList;