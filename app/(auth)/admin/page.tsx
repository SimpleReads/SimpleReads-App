'use client';

import { useEffect, useState } from 'react';
import AdminStausBar from '@/app/lib/adminStatus';

/**
 * Admin page for admin level users to start and stop the model operations
 * @returns admin page 
 */
const Admin = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/api/yourData')
      .then((res) => res.json())
      .then((data) => setText(data.your_field_name))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div>
        <AdminStausBar />
      </div>
    </>
  );
};

export default Admin;