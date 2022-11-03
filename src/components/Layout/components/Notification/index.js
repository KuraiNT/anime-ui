import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faBullhorn} className={cx('bull')} />
            <ul className={cx('text')}>
                <li>
                    <span className={cx('title')}>Mời bạn tham gia group của AnimeVietsub</span>
                    <Link className={cx('link')}> tại đây!</Link>
                </li>
                <li>
                    <span className={cx('title')}>
                        Do thiếu hút kinh phí nên quảng cáo có thể gây khó chịu, rất mong các bạn thông cảm!
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Notification;
