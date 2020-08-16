/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import appClass from './App.module.scss';
import Logo from '../Logo/Logo';
import Filter from '../Filter/Filter';
import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketList/TicketList';

const App: React.FC = () => {
  return (
    <div className={appClass.App}>
      <Logo />
      <Filter />
      <Tabs />
      <TicketList />
    </div>
  );
};

export default App;
