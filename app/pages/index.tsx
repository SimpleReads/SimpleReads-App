import { useEffect, useState } from 'react';

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
      Hello, Next.js!
      <div>{text}</div>
    </div>
  );
};

export default Home;
