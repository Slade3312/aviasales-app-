export enum FilterType {
    All = 'ALL',
    ToggleTabs = 'Toggle_Tabs'
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

export enum SetTicketType {
    SetId = 'Set_Id',
    SetTickets = 'Set_Tickets',
}

export enum SetTabsType {
    Cheap = 'Cheap',
    Fast = 'Fast'
}

export type State = {
    reducerFilter: StateFilter,
    reducerTicket: StateTicket,
}

// filter type //


export type StateFilter = {
    filterTransfer: TransferType[],
    tabs: string
}

export type ActionFilterType = {
    type: TransferType | FilterType.All,
    payload: boolean
}

export type ActionFilterTabsType = {
    type: FilterType.ToggleTabs,
    payload: string
}



// ticket type //

export type StateTicket = {
    ticketsId: string,
    tickets: TicketType[],
    stop?: boolean
}

export type resId = {
    searchId: string
}

export type ActionSetTicketId = {
    type: SetTicketType.SetId,
    ticketsId: string
}


export type ActionSetTickets = {
    type: SetTicketType.SetTickets,
    tickets: TicketType[],
    stop: boolean
}

export type ActionsTickets = ActionSetTicketId | ActionSetTickets

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

export type ErrorState = {
    hasError: boolean
}

// function 

export type FilterTabsType = (tabs: string) => TicketType[]

