import React, { useState, useCallback, useRef, useReducer } from 'react';
import './App.css';
import Template from './components/Template/Template';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';



const reducer = (todos, action) => {
	const { type } = action;
	switch(type) {
		case 'ADD':
			return todos.concat(action.todo);
		case 'REMOVE':
			return todos.filter(todo => todo.id !== action.id);
		case 'MODIFY':
			return todos.map(todo => todo.id === action.id
				? {...todo, done: !todo.done  }
				: todo
			);
		default:
			return todos;
	}
};


function App() {
	const [todos, dispatch] = useReducer(reducer, [
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
			dispatch({
				type: 'ADD',
				todo: { id: idRef.current++, text, done: false },
			});
			setText('');
		}
	}, [text]);

	const handleDone = useCallback(id => {
		if (id) {
			dispatch({
				type: 'MODIFY',
				id,
			})
		}
	}, []);

	const handleRemove = useCallback(id => {
		if (id) {
			dispatch({
				type: 'REMOVE',
				id,
			});
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
