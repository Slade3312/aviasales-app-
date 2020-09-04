import { StateTicket, ActionsTickets, SetTicketType } from '../types';

const initialState: StateTicket = {
    ticketsId: '',
    tickets: [],
};

export default function reducerTicket(state: StateTicket = initialState, actions: ActionsTickets): StateTicket {

    switch (actions.type) {

        case SetTicketType.SetId: {
            const { ticketsId } = actions;
            return { ...state, ticketsId }
        }
        case SetTicketType.SetTickets: {
            const { tickets: newTickets, stop } = actions;
            const tickets = state.tickets.concat(newTickets)
            return { ...state, tickets, stop }
        }

        default: return state;

    }
}