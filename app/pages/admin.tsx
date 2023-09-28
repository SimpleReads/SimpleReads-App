import { useEffect, useState } from 'react';
import DicButton from '@/components/dicButton';
import Link from 'next/link';
import AdminStausBar from '@/components/adminStatus';

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
      DID IT PUSSY
      <AdminStausBar/>
    </div>
    <div>
        <Link href={"/"}>GO TO TEST PAGE</Link>
    </div>
    </>
  );
};

export default Admin;