import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';



const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex items-center justify-end p-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <span>{theme === 'light' ? <MdLightMode/> : <MdDarkMode/>}</span>
        <input
          type="checkbox"
          className="toggle"
          onChange={handleToggle}
          checked={theme === 'dark'}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
