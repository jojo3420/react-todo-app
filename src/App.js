import React from 'react';
import './App.css';
import Template from './components/Template/Template';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { useState, useCallback, useRef, useReducer } from 'react';

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
	// const nextId = useRef(4);
	// const nextId = useRef(2501);
	// const [todos, setTodos] = useState(list);

	// 이벤트 핸들러 함수는 성능을 고려하여 useCallback() 사용함
	// const onInsert = useCallback(
	// 	text => {
	// 		const todo = { id: nextId.current, text, checked: false };
	// 		const newTodos = todos.concat(todo);
	// 		setTodos(newTodos);
	// 		nextId.current += 1;
	// 	},
	// 	[todos],
	// );
	// 성능 향상: useState 의 함수형 업데이트
	// const onInsert = useCallback(text => {
	// 	const todo = { id: nextId.current, text, checked: false };
	//
	// 	// set 함수에 값이 아니라 함수를 전달
	// 	setTodos(todos => todos.concat(todo));
	// 	nextId.current += 1;
	// }, []); //  빈 배열

	// const onRemove = useCallback(
	// 	id => {
	// 		const newTodos = todos.filter(todo => todo.id !== id);
	// 		setTodos(newTodos);
	// 	},
	// 	[todos],
	// );

	// const onRemove = useCallback(id => {
	// 	setTodos(todos => todos.filter(todo => todo.id !== id));
	// }, []);

	// const onToggle = useCallback(
	// 	id => {
	// 		const newTodos = todos.map(todo =>
	// 			todo.id === id ? { ...todo, checked: !todo.checked } : todo,
	// 		);
	// 		setTodos(newTodos);
	// 	},
	// 	[todos],
	// );

	// const onToggle = useCallback(id => {
	// 	setTodos(todos =>
	// 		todos.map(todo =>
	// 			todo.id === id ? { ...todo, checked: !todo.checked } : todo,
	// 		),
	// 	);
	// });

	// useReducer 방식으로 최적화 하기.
	const nextId = useRef(2501);
	// const [todos, dispatch] = useReducer(reducer, null, list);
	const [todos, dispatch] = useReducer(reducer, list);

	const onInsert = text => {
		const todo = { id: nextId.current, text, checked: false };
		dispatch({ type: 'ADD', todo });
	};

	const onRemove = id => {
		dispatch({ type: 'REMOVE', id });
	};

	const onToggle = id => {
		dispatch({ type: 'TOGGLE', id });
	};

	return (
		<Template>
			<TodoInput onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</Template>
	);
}

// function list() {
// 	const arr = [];
// 	for (let i = 1; i < 2500; i++) {
// 		arr.push({
// 			id: i,
// 			text: '할일 ' + i,
// 			checked: false,
// 		});
// 	}
// 	return arr;
// }

function reducer(todos, action) {
	switch (action.type) {
		case 'ADD':
			return todos.concat(action.todo);
		case 'REMOVE':
			return todos.filter(todo => todo.id !== action.id);
		case 'TOGGLE':
			return todos.map(todo =>
				todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
			);
		default:
			return todos;
	}
}

export default App;
