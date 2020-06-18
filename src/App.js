import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import Template from './components/Template/Template';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
	const [todos, setTodos] = useState([
		{id: 1, text: 'test1', done: false },
		{id: 2, text: 'test2', done: true },
		{id: 3, text: 'test3', done: false },
	]);
	const [text, setText] = useState('');
	const idRef = useRef(4);

	const handleText = useCallback(e => {
		const { value } = e.target;
		setText(value);
	}, []);

	const handleInsert = useCallback(e => {
		e.preventDefault();
		if (text) {
			setTodos(todos => todos.concat({
				id: idRef.current++,
				text,
				done: false
			}));
			setText('');
		}
	}, [text]);

	const handleDone = useCallback(id => {
		if (id) {
			setTodos(todos =>
				todos.map(todo => todo.id === id
					? {...todo, done: !todo.done }
					: todo
				));
		}
	}, []);

	const handleRemove = useCallback(id => {
		if (id) {
			setTodos(todos =>
				todos.filter(todo => todo.id !== id));
		}
	}, []);


	return (
		<Template>
			<TodoInput
				text={text}
				handleText={handleText}
				handleInsert={handleInsert}
			/>
			<TodoList
				todos={todos}
				handleDone={handleDone}
				handleRemove={handleRemove}
			/>
		</Template>
	);
}

export default App;
