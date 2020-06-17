import React from 'react';
import styles from 'components/TodoInput/TodoInput.scss';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';

TodoInput.propTypes = {
	text: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleInsert: PropTypes.func.isRequired,
}

const cx = cn.bind(styles);

function TodoInput({ text, handleInsert, handleChange }) {

	// const [text, setText] = useState('');

	// const handleChange = useCallback(e => {
	// 	const { value } = e.target;
	// 	setText(value);
	// }, [setText]);
	//
	// const handleSubmit = useCallback(e => {
	// 	e.preventDefault();
	// 	handleInsert(text);
	// 	setText('');
	// }, [text, setText]);

	return (
		<form
			className={cx('TodoInput')}
			onSubmit={handleInsert}
		>
			<input
				placeholder={'할일을 입력하세요'}
				className={cx('input')}
				value={text}
				onChange={handleChange}
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
}

export default TodoInput;
