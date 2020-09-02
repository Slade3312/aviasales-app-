import { StateTicket, ActionsTickets } from '../types';
import { filterTickets } from '../selectors'

const initialState: StateTicket = {
    ticketsId: '',
    tickets: [],
    ticketsFilter: []
};

export default function reducerTicket(state: StateTicket = initialState, actions: ActionsTickets): StateTicket {

    switch (actions.type) {

        case 'Set_Id': {
            const { ticketsId } = actions;
            return { ...state, ticketsId }
        }
        case 'Set_Tickets': {
            const { tickets: newTickets, stop } = actions;
            const tickets = state.tickets.concat(newTickets)
            return { ...state, tickets, stop }
        }
        case 'FILTER_TICKETS': {
            const { tickets, filterTransfer } = actions;
            const ticketsFilter = filterTickets(tickets, filterTransfer);
            return { ...state, ticketsFilter }
        }
        default: return state;

    }
}