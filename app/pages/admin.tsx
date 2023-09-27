import { useEffect, useState, ReactDOM } from 'react';


const Admin = () => {
    const [text, setText] = useState('');
  
    useEffect(() => {
      fetch('/api/yourData')
        .then((res) => res.json())
        .then((data) => setText(data.your_field_name))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        Hello Boss, Next.js!
      </div>
    );
  };
  
  export default Admin;
