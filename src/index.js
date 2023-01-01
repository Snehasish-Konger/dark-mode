import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './components/styles/globalStyles';

const Root = () => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
      setMode(storedMode);
    } else {
      setMode('light');
    }
  }, []);

  const handleToggle = newMode => {
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <>
      {mode && <GlobalStyles mode={mode} />}
      <App mode={mode} onToggle={handleToggle} />
    </>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);