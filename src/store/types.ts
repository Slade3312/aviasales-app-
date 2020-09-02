export type State = {
    reducerFilter: StateFilter,
    reducerTicket: StateTicket,
}

// filter type //

export type StateFilter = {
    filterTransfer: TransferType[]
}

export type ActionFilterType = {
    type: TransferType,
    payload: boolean
}

export type ActionFilterTypeAll = {
    type: 'ALL',
    payload: boolean
}

export enum TransferType {
    NoTransfers = 'No_Transfers',
    OneTransfer = 'One_Transfer',
    TwoTransfer = 'Two_Transfer',
    ThreeTransfer = 'Three_Transfer',
}

export enum NumberTransfer {
    'No_Transfers' = 0,
    'One_Transfer' = 1,
    'Two_Transfer' = 2,
    'Three_Transfer' = 3
}

// ticket type //

export type StateTicket = {
    ticketsId: string,
    tickets: TicketType[],
    ticketsFilter: TicketType[],
    stop?: boolean
}

export type resId = {
    searchId: string
}

export type ActionSetTicketId = {
    type: 'Set_Id',
    ticketsId: string
}


export type ActionSetTickets = {
    type: 'Set_Tickets',
    tickets: TicketType[],
    stop: boolean
}

export type ActionFilterTickets = {
    type: 'FILTER_TICKETS',
    tickets: TicketType[],
    filterTransfer: TransferType[]
}

export type ActionsTickets = ActionSetTicketId | ActionSetTickets | ActionFilterTickets

export type responseTicket = {
    tickets: TicketType[],
    stop: boolean
}

export type TicketType = {
    // Цена в рублях
    price: number
    // Код авиакомпании (iata)
    carrier: string
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
        {
            // Код города (iata)
            origin: string
            // Код города (iata)
            destination: string
            // Дата и время вылета туда
            date: string
            // Массив кодов (iata) городов с пересадками
            stops: string[]
            // Общее время перелёта в минутах
            duration: number
        },
        {
            // Код города (iata)
            origin: string
            // Код города (iata)
            destination: string
            // Дата и время вылета обратно
            date: string
            // Массив кодов (iata) городов с пересадками
            stops: string[]
            // Общее время перелёта в минутах
            duration: number
        }
    ]
}

export type SegmentsType = {
    // Код города (iata)
    origin: string
    // Код города (iata)
    destination: string
    // Дата и время вылета туда
    date: string
    // Массив кодов (iata) городов с пересадками
    stops: string[]
    // Общее время перелёта в минутах
    duration: number
}