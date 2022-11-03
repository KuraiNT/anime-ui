import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../Image';
import styles from './NotifyItem.module.scss';

const cx = classNames.bind(styles);

function NotifyItem() {
    return (
        <Link className={cx('notify-item')}>
            <Image
                className={cx('notify-img')}
                src="http://cdn.animevietsub.cc/data/banner/2022/08/22/animevsub-N1RoNovtfP.jpg"
            />
            <div className={cx('notify-body')}>
                <span className={cx('notify-name')}>Ta muốn trở thành chúa tể bóng tối!</span>
                <span className={cx('notify-desc')}>Đã cập nhật tập 5</span>
                <span className={cx('notify-time')}>
                    <FontAwesomeIcon icon={faClock} />
                    10 giờ trước
                </span>
            </div>
            <button className={cx('close-btn')}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </Link>
    );
}

export default NotifyItem;
