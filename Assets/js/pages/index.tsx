import App from './App';
import { createRoot } from 'react-dom/client';
import { on } from 'webpack-dev-server-middleware/client';

const app = document.getElementById('app');
const root = createRoot(app as HTMLDivElement);

root.render(<App />);

if (__DEV__) {
  if (module.hot) {
    module.hot.accept(['./App.tsx'], () => {
      root.render(<App />);
    });
  }

  on('ok', ({ builtAt }) => {
    console.log(`[HMR index]: App is up to date at ${new Date(builtAt).toLocaleString()}.`);
  });
}
