import React, { useEffect } from 'react';
import { Spin, Alert, Pagination } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import ticketListClass from './TicketList.module.scss';
import Ticket from '../Ticket/Ticket';
import { State } from '../../store/types';
import * as action from '../../store/action/actionsTickets';
import { getTickets } from '../../store/selectors';

function mapStateToProps(state: State) {
  const { tickets, ticketsId, stop } = state.reducerTicket;
  return {
    tickets,
    ticketsId,
    stop,
  };
}

const mapDispatch = action;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const TicketList: React.FC<Props> = (props: Props) => {
  const { ticketsId, setTicketId, setTicket, tickets, stop } = props;
  let content = null;
  if (ticketsId === '') setTicketId();
  else if (!stop) setTicket(ticketsId);
  else {
    const tiks = tickets.slice(0, 6);
    content = tiks.map((tik) => <Ticket {...tik} />);
  }
  return (
    <div className={ticketListClass.wrapper}>
      {content}
      <Spin tip="Loading..." />
    </div>
  );
};

export default connector(TicketList);
