import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import Template from 'components/Template/Template';
import TodoInput from 'components/TodoInput/TodoInput';
import TodoList from 'components/TodoList/TodoList';

function App() {
	const [text, setText] = useState('');
	const [todoList, setTodoList] = useState([
		{id: 1, text: '밥먹기', checked: false},
		{id: 2, text: '잠자기', checked: true},
	]);
	const idRef = useRef(1000);

	const handleChange = useCallback(e => {
		const { value } = e.target;
		setText(value);
	}, [setText]);

	const handleInsert = useCallback(e => {
		e.preventDefault();
		const todo = { id: idRef.current++, text, checked: false };
		const nextList = todoList.concat(todo);
		setTodoList(nextList);
		setText('');
	}, [text, todoList, setTodoList, setText]);

	const handleRemove = useCallback(id => {
		if (id) {
			const newList = todoList.filter(todo => todo.id !== id);
			setTodoList(newList);
			return;
		}
		throw new Error('삭제할 id가 없습니다.' + id);
	}, [todoList]);

	const handleChecked = useCallback(id => {
		const newList = todoList.map(t => t.id === id ? { ...t, checked: !t.checked} : t);
		setTodoList(newList);
	}, [todoList, setTodoList]);


	return (
		<Template>
			<TodoInput
				text={text}
				handleChange={handleChange}
				handleInsert={handleInsert}
			/>
			<TodoList
				list={todoList}
				handleRemove={handleRemove}
				handleChecked={handleChecked}
			/>
		</Template>
	);
}

export default App;
