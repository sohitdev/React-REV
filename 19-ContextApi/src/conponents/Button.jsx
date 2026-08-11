import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeDataContext';

const Button = () => {
  const { theme, setTheme } = useContext(ThemeDataContext);

  const handleClick = () => {
    if (theme === 'Light') setTheme('Dark');
    if (theme === 'Dark') setTheme('Light');
  };
  return (
    <button className="themeBtn" onClick={handleClick}>
      {theme}
    </button>
  );
};

export default Button;
