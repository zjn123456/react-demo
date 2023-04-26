import type { FC } from 'react';
import React, { useState } from 'react';
import { Button, ButtonProps, message } from 'antd';
import { downBlob } from "@/utils/method/downBlob";

interface PropsType {
  request: () => Promise<any>;
  text?: string;
  onStart?: () => void;
  onEnd?: (result: any) => void;
  buttonProps?: ButtonProps;
}

const ExportData: FC<PropsType> = (props) => {
  const { request, text = '导出', onStart, onEnd, buttonProps } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const export_Fn = async () => {
    if (onStart) {
      const startvalue: any = onStart?.();

      if (!startvalue) {
        return;
      }
    }

    message.loading({
      key: 'export',
      content: '正在导出...',
      duration: 0,
    });
    setLoading(true);
    try {
      const res = await request();

      setLoading(false);
      message.destroy('export');
      if (res) {
        downBlob(res);
        onEnd?.(res);
      }
    } catch (e) {
      setLoading(false);
      message.destroy('export');
    }
  };

  return (
    <Button type={'primary'} onClick={export_Fn} loading={loading} {...buttonProps}>
      {text}
    </Button>
  );
};

export default ExportData;
