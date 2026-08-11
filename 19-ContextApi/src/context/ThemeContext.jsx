import { useState, useEffect } from 'react';
import { ThemeDataContext } from './ThemeDataContext';

const ThemeContext = (props) => {
  const [theme, setTheme] = useState('Light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeDataContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;

// import { useState } from 'react';
// import { ThemeDataContext } from './ThemeDataContext';

// const ThemeContext = (props) => {
//   const [theme, setTheme] = useState('Light');
//   return (
//     <ThemeDataContext.Provider value={{ theme, setTheme }}>
//       {props.children}
//     </ThemeDataContext.Provider>
//   );
// };

// export default ThemeContext;
