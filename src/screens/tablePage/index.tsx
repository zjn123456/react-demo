import React, { FC, useEffect, useRef, useState } from 'react';
import { Button, Divider, message, Select, Tabs, Menu } from 'antd';
import PageTable from '@/components/PageTable';
import { ActionType, ProColumns } from '@ant-design/pro-table';

const TablePage: FC = () => {
  const tableRef = useRef<ActionType>();
  const formRef = useRef<any>();
  const columns: ProColumns<any>[] = [
    {
      title: '单据标题',
      dataIndex: 'wforderTitle',
      ellipsis: true,
      search: false,
    },
    {
      title: '申请单号',
      dataIndex: 'wforderId',
      order: 4,
      ellipsis: true,
    },
    {
      title: '申请人',
      dataIndex: 'creatorName',
      order: 3,
      formItemProps: {
        name: 'peopleOrOrder',
      },
    },
  ];

  return (
    <>
      <PageTable<any>
        actionRef={tableRef}
        formRef={formRef}
        rowKey={'id'}
        columns={columns}
        options={false}
        size="small"
      />
    </>
  );
};

export default TablePage;
