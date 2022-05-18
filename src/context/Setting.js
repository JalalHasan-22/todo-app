import React, { useState, useEffect } from 'react';

export const SettingContext = React.createContext();

export default function Setting({ children }) {
  const [items, setItems] = useState(5);
  const [hideCompletedItems, setHideCompletedItems] = useState(false);
  const [sort, setSort] = useState(false);

  const state = {
    hideCompletedItems: hideCompletedItems,
    items: items,
    sort: sort,
  };

  useEffect(async () => {
    let userSettings = await JSON.parse(localStorage.getItem('settings'));

    if (userSettings) {
      setHideCompletedItems(userSettings.hideCompletedItems);
      setItems(userSettings.items);
      setSort(userSettings.sort);
    }
  });

  return (
    <SettingContext.Provider value={state}>{children}</SettingContext.Provider>
  );
}
