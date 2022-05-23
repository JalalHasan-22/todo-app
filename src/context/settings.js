import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

const Settings = ({ children }) => {
  const [showCompleted, setCompleted] = useState(false);
  const [numItemsPerPage, setNumItemsPerPage] = useState(3);
  const [sortBy, setSortBy] = useState('assignee');
  const [initialRender, isInitialRender] = useState(true);

  useEffect(() => {
    if (!initialRender) {
      let settings = [showCompleted, numItemsPerPage, sortBy];
      localStorage.setItem('settings', JSON.stringify(settings));
    } else {
      isInitialRender(false);
    }
  }, [showCompleted, numItemsPerPage, sortBy]);

  useEffect(() => {
    if (localStorage.getItem('settings')) {
      let settings = JSON.parse(localStorage.getItem('settings'));
      setCompleted(settings[0] || false);
      setNumItemsPerPage(settings[1] || 3);
      setSortBy(settings[2] || 'difficultyHighToLow');
    }
  }, []);

  const values = {
    showCompleted,
    numItemsPerPage,
    sortBy,
    setCompleted,
    setNumItemsPerPage,
    setSortBy,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};

export default Settings;
