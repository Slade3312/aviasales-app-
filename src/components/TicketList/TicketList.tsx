import React, { useEffect, useState } from 'react';
import { Spin, Alert, Button, Progress } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import ticketListClass from './TicketList.module.scss';
import Ticket from '../Ticket/Ticket';
import { State } from '../../store/types';
import * as action from '../../store/action/actionsTickets';
import { filterTickets } from '../../store/selectors';

function mapStateToProps(state: State) {
  const { filterTransfer, tabs } = state.reducerFilter;
  const { tickets, ticketsId, stop } = state.reducerTicket;
  return {
    tickets,
    ticketsId,
    stop,
    filterTransfer,
    tabs,
    ticketsFilter: filterTickets(tickets)(filterTransfer)(tabs),
  };
}

const mapDispatch = action;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

// !! Думал вынести в hoc всю логигу но пока элемент небольшой и эта логика только к нему относится не стал

const TicketList: React.FC<Props> = ({ ticketsId, setTicketId, setTicket, tickets, stop, ticketsFilter }) => {
  const percent = Math.floor((tickets.length * 100) / 10000);

  const [numberVisibility, setNumberVisibility] = useState<number>(5);

  const addTicket = (): void => {
    setNumberVisibility(numberVisibility + 5);
  };

  // Загрузка билетов //
  useEffect(() => {
    if (ticketsId === '') setTicketId();
    else if (!stop) setTicket(ticketsId);
  }, [setTicket, setTicketId, stop, tickets, ticketsId]);

  useEffect(() => {
    setNumberVisibility(5);
  }, [ticketsFilter]);

  const content = ticketsFilter.slice(0, numberVisibility).map((tik) => {
    //  id в API нет старался сделать уникальным

    const key = tik.carrier + tik.segments[0].date + tik.segments[0].origin + tik.segments[0].destination;

    return <Ticket key={key} {...tik} />;
  });

  return (
    <div className={ticketListClass.wrapper}>
      {!stop && (
        <Progress
          strokeColor={{
            from: '#108ee9',
            to: '#87d068',
          }}
          percent={percent}
          showInfo={false}
          status="active"
        />
      )}

      {tickets.length === 0 && <Spin className={ticketListClass.spin} tip="Loading..." />}

      {ticketsFilter?.length === 0 && (
        <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />
      )}

      {content}

      <Button className={ticketListClass.button} type="primary" onClick={addTicket}>
        {ticketsFilter?.length === 0 ? '0 БИЛЕТОВ' : 'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!'}
      </Button>
    </div>
  );
};

export default connector(TicketList);
