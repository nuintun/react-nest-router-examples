import '/css/global.less';

import { render } from 'react-dom';
import React, { lazy, memo, Suspense } from 'react';
import { Route, Router } from '/js/components/react-nest-router';

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

if (__DEV__) {
  module.hot && module.hot.accept();
}

render(<App />, document.getElementById('root'));
