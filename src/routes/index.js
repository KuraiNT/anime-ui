// Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/page/Home';
import Search from '~/page/Search';
import Upload from '~/page/Upload';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
