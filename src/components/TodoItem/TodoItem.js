import React from 'react';
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames/bind';
import styles from './TodoItem.scss';
import PropTypes from 'prop-types';

const cx = cn.bind(styles);

TodoItem.propTypes ={
	todo: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		done: PropTypes.bool,
	}).isRequired,
	handleRemove: PropTypes.func.isRequired,
	handleDone: PropTypes.func.isRequired,
}


function TodoItem({ todo, handleRemove, handleDone }) {
	const { id, text, done } = todo;

	return (
		<div className={cx('TodoItem')}>
			<div className={cx('checkbox', done && "checked")}
				onClick={() => handleDone(id)}
			>
				{done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
				<div className={cx('text')}>{text}</div>
			</div>
			<div className={cx('remove')}>
				<MdRemoveCircleOutline onClick={() => handleRemove(id)}/>
			</div>
		</div>
	);
}

export default React.memo(TodoItem);
