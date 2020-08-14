import React from 'react';
import ticketListClass from './TicketList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketList: React.FC = () => {
  return (
    <div className={ticketListClass.wrapper}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketList;
