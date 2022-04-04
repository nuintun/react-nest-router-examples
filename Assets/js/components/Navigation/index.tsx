import { Divider, Space } from 'antd';
import { memo, Suspense, useCallback, useEffect } from 'react';
import { Outlet, useMatches, useNavigate, useOutletContext, useResolve } from 'react-nest-router';

export default memo(function Navigation() {
  const matches = useMatches();
  const resolve = useResolve();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Navigation Mounted');

    return () => {
      console.log('Navigation Unmounted');
    };
  }, []);

  console.log('Navigation:', useOutletContext());

  const go = useCallback((href: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();

      navigate<{ message: string }>(href, { state: { message: 'Location State' } });
    };
  }, []);

  return (
    <Space direction="vertical">
      <Space>
        <a href={resolve('/')} onClick={go('/')}>
          Home
        </a>
        <Divider type="vertical" />
        <a href={'/login'} onClick={go('/login')}>
          Login
        </a>
        <Divider type="vertical" />
        <a href={resolve('/courses')} onClick={go('/courses')}>
          Courses Index
        </a>
        <Divider type="vertical" />
        <a href={resolve('/courses/1')} onClick={go('/courses/1')}>
          Courses Details
        </a>
        <Divider type="vertical" />
        <a href={resolve('/404')} onClick={go('/404')}>
          404
        </a>
      </Space>
      <Divider />
      <div>
        {matches
          .map(route => route.path)
          .filter(Boolean)
          .join(' --> ') || '/'}
      </div>
      <Divider />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </Space>
  );
});
