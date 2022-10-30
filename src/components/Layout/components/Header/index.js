import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import SearchItem from '~/components/SearchItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

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
                <div>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PoperWrapper>
                                    <ul className={cx('search-list')}>
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                    </ul>
                                </PoperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <input placeholder="Tìm: tên tiếng nhật, anh, việt" className={cx('search-input')} />
                        </div>
                    </Tippy>
                </div>
                <button>Dang nhap</button>
            </div>
        </header>
    );
}

export default Header;
