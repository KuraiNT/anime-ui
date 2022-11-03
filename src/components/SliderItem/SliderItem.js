import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './SliderItem.module.scss';

const cx = classNames.bind(styles);

function SliderItem({ data }) {
    const currentEpisode = true;

    return (
        <div className={cx('slide-item')}>
            <div className={cx('body')}>
                <Image className={cx('img')} src={data.image} />
                <div className={cx('overlay')}></div>
                <div className={cx('star')}>
                    <FontAwesomeIcon icon={faStar} />
                    <span>{data.star}</span>
                </div>
                {/* {currentEpisode ? (

                ) : (

                )} */}
                <span className={cx('episode')}>
                    TẬP
                    <span>{data.episode}</span>
                </span>
                {/* <span className={cx('action')}>FHD</span> */}
                <span className={cx('name')}>{data.title}</span>
                <FontAwesomeIcon className={cx('play-btn')} icon={faPlay} />
            </div>
        </div>
    );
}

export default SliderItem;
