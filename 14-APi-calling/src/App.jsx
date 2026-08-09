import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  // fetch('https://jsonplaceholder.typicode.com/posts/10')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // const handleClick = async () => {
  //   const response = await axios.get(
  //     'https://jsonplaceholder.typicode.com/users',
  //   );
  //   // console.log(response);
  //   console.log(response.data);
  // };

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Load data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3 key={idx}>Hello, {idx + 1}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
