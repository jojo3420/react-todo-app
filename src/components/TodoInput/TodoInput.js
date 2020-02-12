import React from 'react';
import styles from './TodoInput.scss';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

function TodoInput({}) {
	return (
		<form className={cx('TodoInput')}>
			<input placeholder={'할일을 입력하세요'} className={cx('input')} />
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
}

export default TodoInput;
