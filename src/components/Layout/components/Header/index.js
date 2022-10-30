import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img
                    src="http://cdn.animevietsub.cc/data/logo/logoz.png"
                    className={cx('logo')}
                    alt="Anime Vietsub"
                ></img>
                <nav className={cx('nav')}>
                    <ul className={cx('nav-list')}>
                        <li className={cx('nav-item')}>
                            <a href="" className={cx('nav-link', 'active')}>
                                TRANG CHỦ
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="" className={cx('nav-link')}>
                                DẠNG ANIME
                                <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="" className={cx('nav-link')}>
                                TOP ANIME
                                <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="" className={cx('nav-link')}>
                                THỂ LOẠI
                                <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="" className={cx('nav-link')}>
                                SEASON
                                <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="" className={cx('nav-link')}>
                                THƯ VIỆN
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="" className={cx('nav-link')}>
                                LỊCH CHIẾU
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input placeholder="Tìm: tên tiếng nhật, anh, việt" className={cx('search-input')} />
                </div>
                <button>Dang nhap</button>
            </div>
        </header>
    );
}

export default Header;
