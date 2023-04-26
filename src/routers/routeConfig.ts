import { IRoute } from "@/routers/data";

export const routes = <IRoute[]>[
  {
    path: '/login',
    component: '/login',
    layout: false,
  },
  {
    path: '/home',
    title: '首页',
    icon: ['header-menu-home', 'header-menu-home-actived'],
    redirect: '/home/workbench',
    // access: true,
    routes: [
      {
        path: '/home/workbench',
        component: '/home',
        title: '工作台',
        icon: ['side-menu-workbench', 'side-menu-workbench-actived'],
      },
      {
        path: '/home/approve',
        title: '审批',
        redirect: '/home/approve/handle',
        icon: ['side-menu-approve', 'side-menu-approve-actived'],
        routes: [
          {
            exact: true,
            path: '/home/approve/handle',
            component: '/home/Approve',
            title: '待我处理',
          },
          {
            path: '/home/approve/handle/detail',
            component: '/home/Approve/detail',
            title: '详情',
            hideInMenu: true,
          },
          {
            exact: true,
            path: '/home/approve/copytome',
            component: '/home/Approve',
            title: '抄送我的',
          },
          {
            path: '/home/approve/copytome/detail',
            component: '/home/Approve/detail',
            title: '详情',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
]
