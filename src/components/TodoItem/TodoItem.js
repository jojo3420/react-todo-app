import React, { useCallback } from 'react';
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames/bind';
import styles from './TodoItem.scss';
import PropTypes from 'prop-types';


TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	handleRemove: PropTypes.func.isRequired,
	handleChecked: PropTypes.func.isRequired,
}

const cx = cn.bind(styles);


function TodoItem({ todo, handleRemove, handleChecked }) {
	const { id, text, checked } = todo;

	const onRemove = useCallback(e => {
		e.stopPropagation();
		handleRemove(id);
	}, [id, handleRemove]); // 함수도 잊지 말고 포함시켜야.

	//  가급적이면 이중 useCallback() 함수 구조는 피해야 함.
	// const onChecked = useCallback( e => {
	// 	handleChecked(id);
	// }, [id, handleChecked]);

	return (
		<div className={cx('TodoItem')}>
			<div className={cx('checkbox', checked && 'checked')}
				onClick={() => handleChecked(id)}
			>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank  />}
				<div className={cx('text')}>{text}</div>
			</div>
			<div className={cx('remove')} onClick={onRemove}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
}

export default React.memo(TodoItem);
