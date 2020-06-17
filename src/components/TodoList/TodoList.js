import React from 'react';
import TodoItem from 'components/TodoItem/TodoItem';
import cn from 'classnames/bind';
import styles from './TodoList.scss';
import PropTypes from 'prop-types';

TodoList.propTypes = {
	list: PropTypes.array.isRequired,
}


const cx = cn.bind(styles);

function TodoList({ list, handleRemove, handleChecked }) {
	return (
		<div className={cx('TodoList')}>
			{list && list.map(todo => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleRemove={handleRemove}
						handleChecked={handleChecked}
					/>);
			})}
		</div>
	);
}

// export default TodoList;
export default React.memo(TodoList);
