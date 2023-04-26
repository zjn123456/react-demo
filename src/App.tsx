import React, { FC, useEffect, useRef, useState } from 'react';
import { Menu } from 'antd';

const App: FC = () => {
  return (
    <>
      <div>组件封装：</div>
      <Menu
        items={[
          {
            label: '列表Table',
            key: 'table',
            onClick: () => {
              console.log(2);
            },
          },
          { label: '文件上传Upload', key: 'upload' },
        ]}
      ></Menu>
    </>
  );
};

export default App;
