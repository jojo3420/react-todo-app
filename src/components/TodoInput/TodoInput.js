import React from 'react';
import styles from './TodoInput.scss';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames/bind';
import PropTypes from 'prop-types'

TodoInput.propTyeps = {
	text: PropTypes.string.isRequired,
	handleText: PropTypes.func.isRequired,
	handleInsert: PropTypes.func.isRequired,
}

const cx = cn.bind(styles);

function TodoInput({ text, handleText, handleInsert }) {
	return (
		<form className={cx('TodoInput')} onSubmit={handleInsert}>
			<input
				placeholder={'할일을 입력하세요'}
				className={cx('input')}
				value={text}
				onChange={handleText}
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
}

export default TodoInput;
