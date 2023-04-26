import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';

const AppLayout = lazy(() => import('@/components/Layout/AppLayout'));

export default () => {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: '#3956E3',
        errorColor: '#ff4d4f',
        warningColor: '#faad14',
        successColor: '#52c41a',
        infoColor: '#3856E2',
      },
    });
  }, []);

  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ height: '100%', width: '100%', textAlign: 'center', paddingTop: '20%' }}>
            <Spin size="large" tip="正在初始化应用..." />
          </div>
        }
      >
        <Switch>
          <AppLayout />
        </Switch>
      </Suspense>
    </Router>
  );
};
