import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('hi-effect');
  }, []);

  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        CLICK
      </button>
    </div>
  );
};

export default App;
