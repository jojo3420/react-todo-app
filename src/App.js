import React from 'react';
import './App.css';
import Template from './components/Template/Template';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { useState, useCallback, useRef } from 'react';

// 상태 데이터는 TodoList가 아니라 상위 컴포넌트에서 관리 하며
// 배열을 변경하는 함수는 상위컴포넌트에서 하위 컴포넌트에게 전달한다.
const list = [
	{ id: 1, text: 'js 공부하기', checked: false },
	{ id: 2, text: 'node.js 공부하기', checked: false },
	{ id: 3, text: 'Grapthql 공부하기', checked: true },
];

function App() {
	// useState 대신에 useRef를 쓴 이유는
	// id 값은 렌더링 되는데 사용되지 않으며 (변경되어도 리런더링 되지않음)
	// 참조값으로 사용만 하기 때문이다.
	const nextId = useRef(4);
	const [todos, setTodos] = useState(list);

	// 이벤트 핸들러 함수는 성능을 고려하여 useCallback() 사용함
	const onInsert = useCallback(
		text => {
			const todo = { id: nextId.current, text, checked: false };
			const newTodos = todos.concat(todo);
			setTodos(newTodos);
			nextId.current += 1;
		},
		[todos],
	);

	const onRemove = useCallback(
		id => {
			const newTodos = todos.filter(todo => todo.id !== id);
			setTodos(newTodos);
		},
		[todos],
	);

	const onToggle = useCallback(
		id => {
			const newTodos = todos.map(todo =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo,
			);
			setTodos(newTodos);
		},
		[todos],
	);

	return (
		<Template>
			<TodoInput onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</Template>
	);
}

export default App;
