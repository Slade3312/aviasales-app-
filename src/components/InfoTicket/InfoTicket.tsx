import React from 'react';
import infoTicketClass from './InfoTicket.module.scss';
import { SegmentsType } from '../../store/types';

const timeInWay = (min: number): string => {
  const hours = Math.floor(min / 60);
  const minites = min % 60;
  return `${hours}ч ${minites}м`;
};

const InfoTicket: React.FC<SegmentsType> = ({ origin, destination, date, duration, stops }) => {
  const durationMs = duration * 1000 * 60;
  const originTime = new Date(date).toTimeString().slice(0, 5);
  const destinationTime = new Date(Date.parse(date) + durationMs).toTimeString().slice(0, 5);
  const stopsName = stops.join();
  const durationWay = timeInWay(duration);

  return (
    <div className={infoTicketClass.info}>
      <div className={infoTicketClass.destination}>
        <h5 className={infoTicketClass['destination-name']}>{`${origin}-${destination}`}</h5>
        <span className={infoTicketClass['destination-value']}>{`${originTime}-${destinationTime}`}</span>
      </div>
      <div className={infoTicketClass.duration}>
        <h5 className={infoTicketClass['duration-name']}>В ПУТИ</h5>
        <span className={infoTicketClass['duration-name']}>{durationWay}</span>
      </div>
      <div className={infoTicketClass.stop}>
        <h5 className={infoTicketClass['stops-name']}>N ПЕРЕСАДОК</h5>
        <span className={infoTicketClass['stops-name']}>{stopsName}</span>
      </div>
    </div>
  );
};

export default InfoTicket;
