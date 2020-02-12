import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import cn from 'classnames/bind';
import styles from './TodoList.scss';

const cx = cn.bind(styles);

function TodoList({ todos }) {
	return (
		<div className={cx('TodoList')}>
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</div>
	);
}

export default TodoList;
