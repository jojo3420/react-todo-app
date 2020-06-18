import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import cn from 'classnames/bind';
import styles from './TodoList.scss';
import PropTypes from 'prop-types';

TodoList.propTypes ={
	todos: PropTypes.array.isRequired,
}

const cx = cn.bind(styles);

function TodoList({ todos, handleRemove, handleDone }) {
	return (
		<div className={cx('TodoList')}>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleRemove={handleRemove}
					handleDone={handleDone}
				/>
				)
			)}
		</div>
	);
}

export default React.memo(TodoList);
