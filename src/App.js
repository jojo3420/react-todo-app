import React from 'react';
import './App.css';
import Template from 'components/Template';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	return (
		<Template>
			<TodoInput />
			<TodoList />
		</Template>
	);
}

export default App;
