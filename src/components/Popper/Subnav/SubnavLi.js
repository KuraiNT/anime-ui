import classNames from 'classnames/bind';
import styles from './Subnav.module.scss';

const cx = classNames.bind(styles);

function SubnavLi({ children }) {
    return <li className={cx('subnav-item')}>{children}</li>;
}

export default SubnavLi;
