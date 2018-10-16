// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Home from './pages/Home';
import ModelManagement from './pages/ModelManagement';
import ModelMarket from './pages/ModelMarket';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: Home,
  },
  {
    path: '/model/management',
    layout: BasicLayout,
    component: ModelManagement,
  },
  {
    path: '/model/market',
    layout: BasicLayout,
    component: ModelMarket,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
