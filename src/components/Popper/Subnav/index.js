// import HeadlessTippy from '@tippyjs/react/headless';
// import { Wrapper as PopperWrapper } from '~/components/Popper';
// import SubnavItem from './SubnavItem';
// import SubnavLi from './SubnavLi';

// import classNames from 'classnames/bind';
// import styles from './Subnav.module.scss';

// const cx = classNames.bind(styles);

// function Subnav({ children, item = [], item2 = [] }) {
//     const renderItem = item.map((item, index) => <SubnavItem key={index} data={item}></SubnavItem>);
//     const renderItem2 = item2.map((item, index) => <SubnavItem key={index} data={item}></SubnavItem>);

//     return (
//         <HeadlessTippy
//             interactive
//             delay={[0, 100]}
//             offset={[15, 12]}
//             placement="bottom-start"
//             render={(attrs) => (
//                 <div className={cx('subnav')} {...attrs}>
//                     <PopperWrapper>
//                         <ul className={cx('subnav-list')}>
//                             <SubnavLi>{renderItem}</SubnavLi>
//                             <SubnavLi>{renderItem2}</SubnavLi>
//                         </ul>
//                     </PopperWrapper>
//                 </div>
//             )}
//         >
//             {children}
//         </HeadlessTippy>
//     );
// }

// export default Subnav;
