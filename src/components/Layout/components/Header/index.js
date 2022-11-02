import {
    faAngleDown,
    faBell,
    faChevronDown,
    faFilm,
    faMagnifyingGlass,
    faPowerOff,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchItem from '~/components/SearchItem';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import Menu from '~/components/Popper/Menu';
import SubnavDangAnime from '~/components/Popper/Subnav/SubnavDangAnime';
import SubnavTopAnime from '~/components/Popper/Subnav/SubnavTopAnime';
import SubnavLoaiAnime from '~/components/Popper/Subnav/SubnavLoaiAnime';
import SubnavSeasonAnime from '~/components/Popper/Subnav/SubnavSeasonAnime';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Thông tin tài khoản',
        to: '/Tài khoản',
    },
    {
        icon: <FontAwesomeIcon icon={faFilm} />,
        title: 'Hộp phim',
        to: '/Hộp phim',
    },
    {
        icon: <FontAwesomeIcon icon={faPowerOff} />,
        title: 'Thoát',
    },
];

const SUBNAV_ITEM__DANG = [
    {
        title: 'TV/Series',
        to: '/TV/Series',
    },
    {
        title: 'Anime Sắp Chiếu',
        to: '/Anime Sắp Chiếu',
    },
];

const SUBNAV_ITEM_DANG_2 = [
    {
        title: 'Movie/OVA',
        to: '/Movie/OVA',
    },
    {
        title: 'Anime Đang Chiếu',
        to: '/Anime Đang Chiếu',
    },
];

const SUBNAV_ITEM_DANG_3 = [
    {
        title: 'HH Trung Quốc',
        to: '/HH Trung Quốc',
    },
    {
        title: 'Anime Trọn Bộ',
        to: '/Anime Trọn Bộ',
    },
];

const SUBNAV_ITEM__TOP = [
    {
        title: 'Theo Ngày',
        to: '/Theo Ngày',
    },
    {
        title: 'Theo Mùa',
        to: '/Theo Mùa',
    },
];

const SUBNAV_ITEM_TOP_2 = [
    {
        title: 'Yêu Thích',
        to: '/Yêu Thích',
    },
    {
        title: 'Theo Năm',
        to: '/Theo Năm',
    },
];

const SUBNAV_ITEM_TOP_3 = [
    {
        title: 'Theo Tháng',
        to: '/Theo Tháng',
    },
];

const SUBNAV_ITEM_LOAI = [
    {
        title: 'Action',
        to: '/Action',
    },
    {
        title: 'Comedy',
        to: '/Comedy',
    },
    {
        title: 'Drama',
        to: '/Drama',
    },
    {
        title: 'Game',
        to: '/Game',
    },
    {
        title: 'Horror',
        to: '/Horror',
    },
];

const SUBNAV_ITEM_LOAI_2 = [
    {
        title: 'Adventure',
        to: '/Adventure',
    },
    {
        title: 'Dementia',
        to: '/Dementia',
    },
    {
        title: 'Ecchi',
        to: '/Ecchi',
    },
    {
        title: 'Harem',
        to: '/Harem',
    },
    {
        title: 'Josei',
        to: '/Josei',
    },
];

const SUBNAV_ITEM_LOAI_3 = [
    {
        title: 'Cartoon',
        to: '/Cartoon',
    },
    {
        title: 'Demons',
        to: '/Demons',
    },
    {
        title: 'Fantasy',
        to: '/Fantasy',
    },
    {
        title: 'Historical',
        to: '/Historical',
    },
    {
        title: 'Kids',
        to: '/Kids',
    },
];

const SUBNAV_ITEM_SEASON = [
    {
        title: 'Mùa Đông 2022',
        to: '/Mùa Đông 2022',
    },
    {
        title: 'Mùa Thu 2022',
        to: '/Mùa Thu 2022',
    },
    {
        title: 'Mùa Hạ 2021',
        to: '/Mùa Hạ 2021',
    },
    {
        title: 'Mùa xuân 2020',
        to: '/Mùa xuân 2020',
    },
    {
        title: 'Mùa Đông 2019',
        to: '/Mùa Đông 2019',
    },
];

const SUBNAV_ITEM_SEASON_2 = [
    {
        title: 'Mùa xuân 2022',
        to: '/Mùa xuân 2022',
    },
    {
        title: 'Mùa Đông 2021',
        to: '/Mùa Đông 2021',
    },
    {
        title: 'Mùa Thu 2021',
        to: '/Mùa Thu 2021',
    },
    {
        title: 'Mùa Hạ 2020',
        to: '/Mùa Hạ 2020',
    },
    {
        title: 'Mùa xuân 2019',
        to: '/Mùa xuân 2019',
    },
];

const SUBNAV_ITEM_SEASON_3 = [
    {
        title: 'Mùa Hạ 2022',
        to: '/Mùa Hạ 2022',
    },
    {
        title: 'Mùa xuân 2021',
        to: '/Mùa xuân 2021',
    },
    {
        title: 'Mùa Đông 2020',
        to: '/Mùa Đông 2020',
    },
    {
        title: 'Mùa Thu 2020',
        to: '/Mùa Thu 2020',
    },
    {
        title: 'Mùa Hạ 2019',
        to: '/Mùa Hạ 2019',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const currentUser = false;

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
                            <Link href="" className={cx('nav-link', 'active')}>
                                TRANG CHỦ
                            </Link>
                        </li>
                        <div>
                            <SubnavDangAnime
                                item={SUBNAV_ITEM__DANG}
                                item2={SUBNAV_ITEM_DANG_2}
                                item3={SUBNAV_ITEM_DANG_3}
                            >
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        DẠNG ANIME
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </SubnavDangAnime>
                        </div>
                        <div>
                            <SubnavTopAnime item={SUBNAV_ITEM__TOP} item2={SUBNAV_ITEM_TOP_2} item3={SUBNAV_ITEM_TOP_3}>
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        TOP ANIME
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </SubnavTopAnime>
                        </div>
                        <div>
                            <SubnavLoaiAnime
                                item={SUBNAV_ITEM_LOAI}
                                item2={SUBNAV_ITEM_LOAI_2}
                                item3={SUBNAV_ITEM_LOAI_3}
                            >
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        THỂ LOẠI
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </SubnavLoaiAnime>
                        </div>
                        <div>
                            <SubnavSeasonAnime
                                item={SUBNAV_ITEM_SEASON}
                                item2={SUBNAV_ITEM_SEASON_2}
                                item3={SUBNAV_ITEM_SEASON_3}
                            >
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        SEASON
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </SubnavSeasonAnime>
                        </div>
                        <li className={cx('nav-item')}>
                            <Link href="" className={cx('nav-link')}>
                                THƯ VIỆN
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link href="" className={cx('nav-link')}>
                                LỊCH CHIẾU
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <ul className={cx('search-list')}>
                                        <SearchItem />
                                        <SearchItem />
                                    </ul>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <input placeholder="Tìm: tên tiếng nhật, anh, việt" className={cx('search-input')} />
                        </div>
                    </HeadlessTippy>
                </div>

                {currentUser ? (
                    <div className={cx('action')}>
                        <div>
                            <HeadlessTippy
                                interactive
                                offset={[0, 10]}
                                maxWidth={400}
                                trigger="click"
                                placement="bottom-end"
                                arrow={false}
                                render={(attrs) => (
                                    <div className={cx('notify')} tabIndex="-1" {...attrs}>
                                        <span>Không có thông báo</span>
                                    </div>
                                )}
                            >
                                <button className={cx('bell')}>
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </HeadlessTippy>
                        </div>
                        <Menu item={MENU_ITEM}>
                            <div className={cx('user')}>
                                <img
                                    alt=""
                                    src="https://i.pinimg.com/236x/5d/e3/1e/5de31ea6ee90e3489369edfdab2a50ed.jpg"
                                    className={cx('avatar')}
                                />
                                <FontAwesomeIcon icon={faAngleDown} className={cx('down')} />
                            </div>
                        </Menu>
                    </div>
                ) : (
                    <Button primary>Đăng nhập</Button>
                )}
            </div>
        </header>
    );
}

export default Header;
