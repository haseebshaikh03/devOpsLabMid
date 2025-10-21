import React from 'react';

const Switcher = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    };

    return (
        <button onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default Switcher;