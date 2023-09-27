import { useEffect, useState } from 'react';
import DicButton from '@/components/dicButton';
import Admin from './admin';

const Home = () => {
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
      <div>{text}</div>
      <DicButton/>
      <button onClick = {Admin}>TO ADMIN PAGE</button>
    </div>
  );
};

export default Home;
