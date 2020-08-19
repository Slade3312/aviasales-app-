/* eslint-disable react/prop-types */
import React from 'react';
import ticketClass from './Ticket.module.scss';
import InfoTicket from '../InfoTicket/InfoTicket';
import { TicketType } from '../../store/types';

const Ticket: React.FC<TicketType> = ({ price, carrier, segments }) => {
  return (
    <div className={ticketClass.wrapper}>
      <div className={ticketClass['price-carrier']}>
        <span className={ticketClass.price}>{price}</span>
        <span className={ticketClass.carrier}>{carrier}</span>
      </div>
      <InfoTicket {...segments[0]} />
      <InfoTicket {...segments[1]} />
    </div>
  );
};

export default Ticket;
