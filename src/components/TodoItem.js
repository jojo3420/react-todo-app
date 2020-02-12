import React from 'react';
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames/bind';
import styles from './TodoItem.scss';

console.log(styles);
const cx = cn.bind(styles);

function TodoItem({ todo }) {
	return (
		<div className={cx('TodoItem')}>
			<div className={cx('checkbox')}>
				<MdCheckBoxOutlineBlank />
				<div className={cx('text')}>할 일</div>
			</div>
			<div className={cx('remove')}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
}

export default TodoItem;
