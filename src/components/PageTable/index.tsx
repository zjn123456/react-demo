import React, { useMemo, useRef } from 'react';
import type { ProTableProps } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import './index.less';

export type PageTableType<T> = ProTableProps<T, any>;

const PageTable = <T extends Record<string, any>>(props: PageTableType<T>) => {
  const container: any = useMemo<Window | HTMLElement>(() => {
    const contentDom = document.querySelectorAll('.ant-layout-content');
    const containerDom = contentDom[contentDom?.length - 1];

    return containerDom as any;
  }, [location.pathname]);

  const handleScroll = () => {
    //翻页置顶
    document.body.scrollTop = document.documentElement.scrollTop = container.scrollTop = 0;
  };

  return (
    <ProTable<T>
      className={'pageTable'}
      columnEmptyText={'--'}
      rowKey={(record) => record.id || record?.orgId || record?.orderNo || record?.index}
      scroll={{ ...props, x: 1000, scrollToFirstRowOnChange: true }}
      form={{
        labelAlign: 'right',
        autoComplete: 'off',
        autoFocusFirstInput: false,
        labelWidth: 'auto',
      }}
      // scroll={{
      //   x: 1000,
      //   // y: 'calc(100vh - 310px)',
      //   // scrollToFirstRowOnChange: true,
      // }}
      sticky={{
        offsetHeader: 0,
        getContainer: () => container,
      }}
      options={false}
      pagination={{
        showSizeChanger: true,
      }}
      onChange={() => {
        handleScroll();
      }}
      search={{
        defaultCollapsed: true,
        optionRender: (searchConfig, formProps, dom) => [...dom],
      }}
      {...props}
    />
  );
};

export default PageTable;
