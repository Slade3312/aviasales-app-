import React from 'react';
import infoTicketClass from './InfoTicket.module.scss';

const InfoTicket: React.FC = () => {
  return (
    <div className={infoTicketClass.info}>
      <div className={infoTicketClass.destination}>
        <h5 className={infoTicketClass['destination-name']}>MOW-HKT</h5>
        <span className={infoTicketClass['destination-value']}>10:45-08:00</span>
      </div>
      <div className={infoTicketClass.duration}>
        <h5 className={infoTicketClass['duration-name']}>В ПУТИ</h5>
        <span className={infoTicketClass['duration-name']}>21ч 15м</span>
      </div>
      <div className={infoTicketClass.stop}>
        <h5 className={infoTicketClass['stops-name']}>N ПЕРЕСАДОК</h5>
        <span className={infoTicketClass['stops-name']}>NKB,JNK</span>
      </div>
    </div>
  );
};

export default InfoTicket;
