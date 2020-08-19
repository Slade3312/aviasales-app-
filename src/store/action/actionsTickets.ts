import { Dispatch } from 'redux'
import { ActionSetTicketId, ActionSetTicket, TicketType } from '../types'
import { getTicketsId, getTickets } from '../selectors'

const setTicketId = () => {
    return (dispatch: Dispatch): void => {
        getTicketsId().then((value) => {
            const ticketsId = value.searchId;
            dispatch({
                type: 'Set_Id',
                ticketsId
            })
        })
    }
}

const setTicket = (id: string) => {
    return (dispatch: Dispatch): void => {
        getTickets(id)
            .then((value) => {
                const { tickets, stop } = value;
                dispatch({
                    type: "Set_Ticket",
                    tickets,
                    stop
                })
            })
            .catch(() => {
                dispatch({
                    type: "Set_Ticket",
                    tickets: [],
                    stop: false
                })
            })
    }
}

export {
    setTicketId,
    setTicket
}

