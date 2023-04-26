import React, { FC, useEffect, useRef, useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styles from 'index.module.less';

const { Sider } = Layout;

const MenuLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, set0penKeys] = useState<any[]>([]);
  const onOpenChange = (val: any) => {
    set0penKeys(val);
  };
  const onSelect = ({ key, keyPath }) => {
    // const { path }: any = routesFlat().find((item) => item.key === key);
    //
    // history.push(path);
    // dispatch(selectedMenu({ side: keyPath }));
  };

  return (
    <Sider
      className={styles['layout-side-menu']}
      width={210}
      theme="light"
      collapsedWidth={50}
      collapsed={collapsed}
    >
      <Menu
        mode="inline"
        multiple={false}
        inlineIndent={17}
        // items={menuItems}
        // selectedKeys={sideMenus}
        onSelect={onSelect}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
      <div
        className={styles['layout-side-collapse']}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        {collapsed ? (
          <MenuUnfoldOutlined />
        ) : (
          <>
            <MenuFoldOutlined />
            <span style={{ margin: '0 7px' }}>收起菜单</span>
          </>
        )}
      </div>
    </Sider>
  );
};

export default MenuLayout;
