import '/css/global.less';

import { Route, Router } from 'react-nest-router';
import React, { lazy, memo, Suspense } from 'react';
import { createRoot, Root } from 'react-dom/client';

const Home = lazy(() => import('/js/pages/Home'));
const Login = lazy(() => import('/js/pages/Login'));
const Layout = lazy(() => import('/js/components/Layout'));
const NoMatch = lazy(() => import('/js/components/NoMatch'));
const Courses = lazy(() => import('/js/components/Courses'));
const Navigation = lazy(() => import('/js/components/Navigation'));
const CoursesIndex = lazy(() => import('/js/pages/courses/index'));
const CoursesDetails = lazy(() => import('/js/pages/courses/Details'));

const routes: Route<{ id: number }, 'id'>[] = [
  {
    element: <Navigation />,
    children: [
      { path: '/login', meta: { id: 1 }, element: <Login /> },
      {
        path: '/',
        meta: { id: 2 },
        element: <Layout />,
        children: [
          { index: true, meta: { id: 6 }, element: <Home /> },
          {
            path: 'courses',
            meta: { id: 3 },
            element: <Courses />,
            children: [
              { index: true, meta: { id: 4 }, element: <CoursesIndex /> },
              { path: '/courses/:id', meta: { id: 5 }, element: <CoursesDetails /> }
            ]
          }
        ]
      }
    ]
  }
];

const App = memo(function App(): React.ReactElement {
  return (
    <div style={{ textAlign: 'center', paddingTop: 68 }}>
      <Suspense fallback="loading...">
        <Router routes={routes} context={{ message: 'Outlet Context' }}>
          <NoMatch />
        </Router>
      </Suspense>
    </div>
  );
});

declare global {
  interface Window {
    __REACT_ROOT__: Root;
  }
}

if (__DEV__) {
  const root = (() => {
    if (!window.__REACT_ROOT__) {
      window.__REACT_ROOT__ = createRoot(document.getElementById('root') as HTMLDivElement);
    }

    return window.__REACT_ROOT__;
  })();

  root.render(<App />);

  module.hot && module.hot.accept();
} else {
  const root = createRoot(document.getElementById('root') as HTMLDivElement);

  root.render(<App />);
}
