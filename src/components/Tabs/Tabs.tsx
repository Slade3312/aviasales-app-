import React from 'react';
import './Tabs.scss';
import { Button } from 'antd';

const Tabs: React.FC = () => {
  return (
    <div className="wrapper">
      <Button type="primary">Primary Button</Button>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default Tabs;
