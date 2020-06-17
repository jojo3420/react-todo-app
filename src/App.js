import React, { useState, useRef, useCallback, useReducer } from 'react';
import './App.css';
import Template from 'components/Template/Template';
import TodoInput from 'components/TodoInput/TodoInput';
import TodoList from 'components/TodoList/TodoList';



const reducer = (todoList, action) => {
	switch (action.type) {
		case 'ADD':
			return todoList.concat({
				id: action.id,
				text: action.text,
				checked: false
			});
		case 'REMOVE':
			return todoList.filter(todo => todo.id !== action.id);
		case 'MODIFY':
			return todoList.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked} : todo)
		default:
			return todoList;
	}
};

function App() {
	const [text, setText] = useState('');
	const [todoList, dispatch] = useReducer(reducer, [], createSampleData);
	const idRef = useRef(3000);

	const handleChange = useCallback(e => {
		const { value } = e.target;
		setText(value);
	}, []);

	const handleInsert = useCallback(e => {
		e.preventDefault();
		if (text) {
			// dispatch
			dispatch({
				type: 'ADD',
				id: idRef.current++,
				text,
			})
			setText('');
		}
	}, [text]);

	const handleRemove = useCallback(id => {
		if (id) {
			// dispatch
			dispatch({
				type: 'REMOVE',
				id,
			});
			return;
		}
		throw new Error('삭제할 id가 없습니다.' + id);
	}, []); // todoList 의존성 제거

	const handleChecked = useCallback(id => {
		// dispatch
		dispatch({
			type: 'MODIFY',
			id,
		})
	}, []); // todoList 의존성 제거


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


function createSampleData () {
	const list = [];
	for (let i = 1; i < 2501; i++) {
		list.push({
			id: i,
			text: 'sample ' + i,
			checked: false
		});
	}
	return list;
};
export default App;
