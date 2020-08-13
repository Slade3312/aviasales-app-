import React from 'react';
import appClass from './App.module.scss';
import Logo from '../Logo/Logo';
import Filter from '../Filter/Filter';
import Tabs from '../Tabs/Tabs';

const App: React.FC = () => {
  return (
    <div className={appClass.App}>
      <Logo />
      <Filter />
      <Tabs />
    </div>
  );
};

export default App;
