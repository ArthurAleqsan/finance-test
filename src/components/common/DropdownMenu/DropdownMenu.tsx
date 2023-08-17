import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React, { FC } from 'react';

type Props = {
  name: string;
  styleName: string;
  styleIcon: string;
  items: any[];
};
export const DropdownMenu: FC<Props> = ({ name, items, styleName, styleIcon }) => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className={styleName}>{name}</div>
        <div className={styleIcon}>
          <DownOutlined />
        </div>
      </Space>
    </a>
  </Dropdown>
);
