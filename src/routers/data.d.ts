export type IRoute = {
  routes?: IRoute[];
  exact?: boolean;
  strict?: boolean;
  path: string;
  must?: boolean;
  icon?: any[];
  title?: string;
  component?: any;
  redirect?: string;
  access?: boolean; //权限校验->默认false
  layout?: any | boolean; //当前路由及子级路由不展示,默认每个路由都有layout
  hideHeader: boolean; //当前路由不展示顶栏
  hideMenu: boolean; //当前路由及子级路由不展示菜单
  hideInMenu: boolean; //可以在菜单中不展示这个路由，包括子路由
  hideBreadCrumb: boolean; //面包屑
};
