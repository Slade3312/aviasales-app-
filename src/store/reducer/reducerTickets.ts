import { StateTicket, ActionsTicket } from '../types';
import Ticket from '../../components/Ticket/Ticket';

const initialState: StateTicket = {
    ticketsId: '',
    tickets: []
};

export default function reducerTicket(state: StateTicket = initialState, actions: ActionsTicket): StateTicket {

    switch (actions.type) {

        case 'Set_Id': {
            const { ticketsId } = actions;
            return { ...state, ticketsId }
        }

        case 'Set_Ticket': {
            const { tickets: newTickets, stop } = actions;
            const tickets = state.tickets.concat(newTickets)
            return { ...state, tickets, stop }
        }





        default: return state;

    }
}