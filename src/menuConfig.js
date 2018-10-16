// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '模型管理',
    path: '/model/management',
    icon: 'home2',
  },
  {
    name: '模型市场',
    path: '/model/market',
    icon: 'cascades',
  },
  {
    name: '反馈',
    path: 'https://github.com/724686158/DSSP_F/issues/new',
    icon: 'question2',
    external: true,
    newWindow: true,
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
