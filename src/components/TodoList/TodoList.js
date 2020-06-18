import React, { useCallback } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import cn from 'classnames/bind';
import styles from './TodoList.scss';
import PropTypes from 'prop-types';
import { List } from 'react-virtualized';

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
};

const cx = cn.bind(styles);

function TodoList({ todos, handleRemove, handleDone }) {
	const rowRenderer = useCallback(({ index, key, style }) => {
		return (
			<TodoItem
				key={key}
				todo={todos[index]}
				handleRemove={handleRemove}
				handleDone={handleDone}
				style={style}
			/>
		)
	}, [todos, handleRemove, handleDone ]);

	return (
		<List
			className="TodoList"
			width={512}
			height={329}
			rowCount={todos.length}
			list={todos}
			rowRenderer={rowRenderer}
			rowHeight={57}
			style={{outline: 'none'}}
		/>
	)

};

export default React.memo(TodoList);
