import React from 'react';
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames/bind';
import styles from './TodoItem.scss';
import propTypes from 'prop-types';

const cx = cn.bind(styles);

function TodoItem({ todo, onRemove, onToggle }) {
	const { id, text, checked } = todo;
	return (
		<div className={cx('TodoItem')}>
			<div className={cx('checkbox')} onClick={() => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className={cx('text')}>{text}</div>
			</div>
			<div className={cx('remove')} onClick={() => onRemove(id)}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
}

// props로 넘겨 받는거중에 투두 속성만 필수 체크를 하는 이유는 이 속성은 여기서만 할 수 있고
// 다른 함수는 이미 상위 컴포넌트에서 했으므로 안해도 된다.
TodoItem.propTypes = {
	todo: propTypes.object.isRequired,
};

TodoItem.defaultProps = {
	// something
};

// export default TodoItem;

// 성능 최적화 : props 매개변수 의 값이 변경될 경우만 렌더링 된다고 함
export default React.memo(TodoItem);
