import classNames from 'classnames/bind';
import styles from './SeachItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <li className={cx('search-item')}>
            <img
                className={cx('search-item-img')}
                alt=""
                src="http://cdn.animevietsub.cc/data/poster/2022/09/04/animevsub-XziE3LSbeO.png"
            />
            <div className={cx('search-item-body')}>
                <span className={cx('search-name')}>Kamen Rider Geats</span>
                <span className={cx('search-episodes')}>Tập 09 VietSub</span>
            </div>
        </li>
    );
}

export default SearchItem;
