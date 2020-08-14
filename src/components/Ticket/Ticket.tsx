import React from 'react';
import ticketClass from './Ticket.module.scss';
import InfoTicket from '../InfoTicket/InfoTicket';

const Ticket: React.FC = () => {
  return (
    <div className={ticketClass.wrapper}>
      <div className={ticketClass['price-carrier']}>
        <span className={ticketClass['price']}>13400</span>
        <span className={ticketClass['carrier']}>Airlines</span>
      </div>
      <InfoTicket />
      <InfoTicket />
    </div>
  );
};

export default Ticket;
