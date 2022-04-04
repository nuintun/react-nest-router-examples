import { Space } from 'antd';
import { memo, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-nest-router';

export default memo(function Courses() {
  useEffect(() => {
    console.log('Courses Mounted');

    return () => {
      console.log('Courses Unmounted');
    };
  }, []);

  console.log('Courses:', useOutletContext<{ message: string }>());

  return (
    <Space direction="vertical">
      <div>Courses</div>
      <Outlet />
    </Space>
  );
});
