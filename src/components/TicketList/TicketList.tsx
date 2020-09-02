import React, { useEffect, useState } from 'react';
import { Spin, Alert, Button, Progress } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import ticketListClass from './TicketList.module.scss';
import Ticket from '../Ticket/Ticket';
import { State, TicketType } from '../../store/types';
import * as action from '../../store/action/actionsTickets';
import { filterTickets } from '../../store/selectors';

function mapStateToProps(state: State) {
  const { filterTransfer } = state.reducerFilter;
  const { tickets, ticketsId, stop, ticketsFilter } = state.reducerTicket;
  return {
    tickets,
    ticketsId,
    stop,
    filterTransfer,
    ticketsFilter,
  };
}

const mapDispatch = action;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const TicketList: React.FC<Props> = ({
  ticketsId,
  setTicketId,
  setTicket,
  setTicketsFilter,
  tickets,
  stop,
  ticketsFilter,
  filterTransfer,
}) => {
  const percent = Math.floor((tickets.length * 100) / 10000);

  // const [ticketsFilter, setTicketsFilter] = useState<TicketType[]>([]);
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
    if (tickets.length !== 0) {
      setTicketsFilter(tickets, filterTransfer);
    } else setTicketsFilter(tickets, filterTransfer);
  }, [filterTransfer, setTicketsFilter, tickets]);

  const content = ticketsFilter.slice(0, numberVisibility).map((tik) => {
    const key = Math.random() + tik.price;
    // console.log(tik, key);
    console.log('render');
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
