import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Home Mounted');

    return () => {
      console.log('Home Unmounted');
    };
  }, []);

  return <div>Home</div>;
}
