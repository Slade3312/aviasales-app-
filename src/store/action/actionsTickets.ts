import { Dispatch } from 'redux'
import { getTickets, getTicketsId } from '../serviceAPI'
import { SetTicketType } from '../types'


const setTicketId = () => {
    return (dispatch: Dispatch): void => {
        getTicketsId().then((value) => {
            const ticketsId = value.searchId;
            dispatch({
                type: SetTicketType.SetId,
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
                    type: SetTicketType.SetTickets,
                    tickets,
                    stop
                })
            })
            .catch(() => {
                dispatch({
                    type: SetTicketType.SetTickets,
                    tickets: [],
                    stop: false
                })
            })
    }
}

export {
    setTicketId,
    setTicket,
}

