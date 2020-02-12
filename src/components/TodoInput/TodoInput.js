import React from 'react';
import styles from './TodoInput.scss';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames/bind';
import { useState } from 'react';
import propTypes from 'prop-types';
const cx = cn.bind(styles);

function TodoInput({ onInsert }) {
	// 인풋 필드 상태는 상위 컴포넌트가 아니라 자신의 상태로 가지고 있는점 중요!
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		onInsert(value);
		setValue('');
	};

	return (
		<form className={cx('TodoInput')} onSubmit={handleSubmit}>
			<input
				placeholder={'할일을 입력하세요'}
				className={cx('input')}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
}

TodoInput.propTypes = {
	onInsert: propTypes.func.isRequired,
};

export default TodoInput;
