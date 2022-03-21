import { useEffect } from 'react';
import { useLocation, useParams } from 'react-nest-router';

export default function CoursesDetails() {
  useEffect(() => {
    console.log('Courses Details Mounted');

    return () => {
      console.log('Courses Details Unmounted');
    };
  }, []);

  const params = useParams<'id'>();
  const location = useLocation<{ message: string }>();

  console.log('Courses Details:', location.state);

  return <div>Courses Details {params.id}</div>;
}
