import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import cn from 'classnames/bind';
import styles from './TodoList.scss';
import propTypes from 'prop-types';

const cx = cn.bind(styles);

function TodoList({ todos, onRemove, onToggle }) {
	if (todos.length === 0)
		return (
			<TodoItem
				onRemove={onRemove}
				onToggle={onToggle}
				todo={{ id: 1, text: '데이터가 없습니다', checked: false }}
			></TodoItem>
		);
	return (
		<div className={cx('TodoList')}>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
}
// 필수 적으로 필요한 프랍은 필수로 확인 한다.
TodoList.propTypes = {
	todos: propTypes.array.isRequired,
	onRemove: propTypes.func.isRequired,
	onToggle: propTypes.func.isRequired,
};

// TodoList.defaultProps = {
// 	todos: [], // todos 에 defaultProps 를 지정하면 propTypes이 무력화됨.. 기본값이 지정되므로.
// };

// todos 변경될 경우에만 리렌더링 되도록 최적화 해준다.
// 만약 todoInput 의 인풋값이 App에 있다고 하면 memo가 없을 경우 필드값 변경만으로 list 가 리 렌더링 된다.
export default React.memo(TodoList);
