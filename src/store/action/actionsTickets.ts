import { Dispatch } from 'redux'
import { getTicketsId, getTickets } from '../selectors'
import { ActionFilterTickets, TicketType, TransferType } from '../types'

const setTicketsFilter = (tickets: TicketType[], filterTransfer: TransferType[]): ActionFilterTickets => {
    return {
        type: 'FILTER_TICKETS',
        tickets,
        filterTransfer
    }
}

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
                    type: "Set_Tickets",
                    tickets,
                    stop
                })
            })
            .catch(() => {
                dispatch({
                    type: "Set_Tickets",
                    tickets: [],
                    stop: false
                })
            })
    }
}

export {
    setTicketId,
    setTicket,
    setTicketsFilter
}

