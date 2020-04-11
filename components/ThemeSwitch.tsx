import React, { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

const MODE_TRANSITION_CLASS_NAME = 'dark-mode-transition';
const MODE_TRANSITION_DURATION = 250;

function setDarkModeTransition() {
  document.documentElement.classList.add(MODE_TRANSITION_CLASS_NAME);
  setTimeout(
    () => document.documentElement.classList.remove(MODE_TRANSITION_CLASS_NAME),
    MODE_TRANSITION_DURATION
  );
}

function setHtmlBackground(hasActiveDarkMode) {
  if (hasActiveDarkMode) {
    document.documentElement.style.backgroundColor = '#121212';
  } else {
    document.documentElement.style.backgroundColor = '#ffffff';
  }
}

const ThemeSwitch: React.FC = () => {
  const { value: hasActiveDarkMode, toggle: activateDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkModeTransition();
    activateDarkMode();
  };

  useEffect(() => {
    setHtmlBackground(hasActiveDarkMode);
  }, [hasActiveDarkMode]);

  return (
    <span className="hover:pointer" onClick={toggleDarkMode}>
      {hasActiveDarkMode ? '💡' : '🕶️'}
    </span>
  );
};

export default ThemeSwitch;
