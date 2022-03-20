import { useEffect } from 'react';

export default function CoursesIndex() {
  useEffect(() => {
    console.log('Courses Index Mounted');

    return () => {
      console.log('Courses Index Unmounted');
    };
  }, []);

  return <div>Courses Index</div>;
}
