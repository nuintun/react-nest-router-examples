import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    console.log('Login Mounted');

    return () => {
      console.log('Login Unmounted');
    };
  }, []);

  return <div>Login</div>;
}
