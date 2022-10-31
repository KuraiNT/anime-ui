import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
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
                            <Link href="" className={cx('nav-link', 'active')}>
                                TRANG CHỦ
                            </Link>
                        </li>
                        <div>
                            <HeadlessTippy
                                interactive
                                delay={[0, 100]}
                                offset={[17, 12]}
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className={cx('subnav')} {...attrs}>
                                        <PopperWrapper>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        TV/Series
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Movie/OVA
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        HH Trung Quốc
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Anime Sắp Chiếu
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Anime Đang Chiếu
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Anime Trọn Bộ
                                                    </Link>
                                                </li>
                                            </ul>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        DẠNG ANIME
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </HeadlessTippy>
                        </div>
                        <div>
                            <HeadlessTippy
                                interactive
                                delay={[0, 100]}
                                offset={[17, 12]}
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className={cx('subnav')} {...attrs}>
                                        <PopperWrapper>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Theo Ngày
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Yêu Thích
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Theo Tháng
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Theo Mùa
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Theo Năm
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}></Link>
                                                </li>
                                            </ul>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        TOP ANIME
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </HeadlessTippy>
                        </div>
                        <div>
                            <HeadlessTippy
                                interactive
                                delay={[0, 100]}
                                offset={[17, 12]}
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className={cx('subnav')} {...attrs}>
                                        <PopperWrapper>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Action
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Adventure
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Cartoon
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Comedy
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Dementia
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Demons
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Drama
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Ecchi
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Fantasy
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Game
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Harem
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Historical
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Horror
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Josei
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Kids
                                                    </Link>
                                                </li>
                                            </ul>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        THỂ LOẠI
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </HeadlessTippy>
                        </div>
                        <div>
                            <HeadlessTippy
                                interactive
                                delay={[0, 100]}
                                offset={[17, 12]}
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className={cx('subnav')} {...attrs}>
                                        <PopperWrapper>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Đông 2022
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa xuân 2022
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Hạ 2022
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Thu 2022
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Đông 2021
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Xuân 2021
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Hạ 2021
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Thu 2021
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Đông 2020
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Xuân 2020
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Hạ 2020
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Thu 2020
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className={cx('subnav-list')}>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Đông 2019
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Xuân 2019
                                                    </Link>
                                                </li>
                                                <li className={cx('subnav-item')}>
                                                    <Link href="" className={cx('subnav-link')}>
                                                        Mùa Thu 2019
                                                    </Link>
                                                </li>
                                            </ul>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('nav-item')}>
                                    <Link href="" className={cx('nav-link')}>
                                        SEASON
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                                    </Link>
                                </li>
                            </HeadlessTippy>
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
                <Button primary>Đăng nhập</Button>
            </div>
        </header>
    );
}

export default Header;
