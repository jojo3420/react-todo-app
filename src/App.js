import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import Template from 'components/Template/Template';
import TodoInput from 'components/TodoInput/TodoInput';
import TodoList from 'components/TodoList/TodoList';

function App() {
	const [text, setText] = useState('');
	const [todoList, setTodoList] = useState(createSampleData);
	const idRef = useRef(3000);

	const handleChange = useCallback(e => {
		const { value } = e.target;
		setText(value);
	}, []);

	const handleInsert = useCallback(e => {
		e.preventDefault();
		if (text) {
			// 함수형 업데이트로 변경
			setTodoList(todoList => todoList.concat(
				{ id: idRef.current++, text, checked: false }
				));
			setText('');
		}
	}, [text]);

	const handleRemove = useCallback(id => {
		if (id) {
			// 함수형 업데이트 코드로 변경
			setTodoList(todoList => todoList.filter(todo => todo.id !== id));
			return;
		}
		throw new Error('삭제할 id가 없습니다.' + id);
	}, []); // todoList 의존성 제거

	const handleChecked = useCallback(id => {
		// 함수형 업데이트 코드로 변경
		setTodoList(todoList =>
			todoList.map(todo => todo.id === id ? { ...todo, checked: !todo.checked}: todo))
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
