import SliderItem from '~/components/SliderItem/SliderItem';
import { slideList } from '~/data';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('movie-list')}>
                <OwlCarousel items={8} nav loop dots={false}>
                    {slideList.map((slide, index) => (
                        <SliderItem key={index} data={slide} />
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Slider;
