import React from 'react';
import './App.css';
import Template from './components/Template/Template';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<Template>
			<TodoInput />
			<TodoList />
		</Template>
	);
}

export default App;
