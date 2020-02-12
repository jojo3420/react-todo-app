import React from 'react';
import styles from './Template.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

function Template({ children }) {
	return (
		<div className={cx('Template')}>
			<div className={cx('app-title')}>일정관리</div>
			<div className={cx('content')}>{children}</div>
		</div>
	);
}

export default Template;
