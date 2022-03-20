import { Space } from 'antd';
import { useEffect } from 'react';
import { Outlet } from '/js/components/react-nest-router';

export default function Layout() {
  useEffect(() => {
    console.log('Layout Mounted');

    return () => {
      console.log('Layout Unmounted');
    };
  }, []);

  return (
    <Space direction="vertical">
      <div>Layout</div>
      <Outlet />
    </Space>
  );
}
