const App = () => {
  // localStorage.setItem('user', 'sohit');

  // four methods of local storage

  // getItem
  // setItem
  // remoevItem
  // clear

  const user = {
    user: 'sohit',
    age: '21',
    cty: 'Ghaziabad',
  };

  localStorage.setItem('user', JSON.stringify(user));

  const data = localStorage.getItem('user'); // we receive data in form of string so we have to convert it
  console.log(data);

  console.log(JSON.parse(data));

  return <div>App</div>;
};

export default App;
