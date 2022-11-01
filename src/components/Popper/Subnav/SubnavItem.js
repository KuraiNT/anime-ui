import classNames from 'classnames/bind';
import styles from './Subnav.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SubnavItem({ data }) {
    return (
        <Button className={cx('subnav-link')} to={data.to}>
            {data.title}
        </Button>
    );
}

export default SubnavItem;
