'use client';

import { useEffect, useState } from 'react';
import AdminStausBar from '@/components/adminStatus';

/**
 * Admin page for admin level users to start and stop the model operations
 * @returns admin page 
 */
const Admin = () => {
  // State variables to handle the components behaviour 
  const [text, setText] = useState('');

  // Use the 'useEffect' hook to fetch data from the '/api/yourData' endpoint
  useEffect(() => {
    fetch('/api/yourData') // Send a GET request to the API endpoint
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => setText(data.your_field_name)) // Update the 'text' state with the retrieved data
      .catch((error) => console.error('Error fetching data:', error));  // Handle errors
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <>
    <div>
      <AdminStausBar/> {/* Render the AdminStatus component */}
    </div>
    </>
  );
};

export default Admin; // Export the admin component