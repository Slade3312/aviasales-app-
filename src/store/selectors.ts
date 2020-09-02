import { TransferType, resId, responseTicket, NumberTransfer, TicketType } from "./types";


const isAll = (filter: TransferType[]): boolean => {
    const allFilterTypes = Object.values(TransferType);
    return filter.length === allFilterTypes.length;
}

const getTicketsId = async (): Promise<resId> => {
    const res = await fetch('https://front-test.beta.aviasales.ru/search');
    return res.json()
}

const getTickets = async (id: string): Promise<responseTicket> => {
    const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
    return res.json()
}

const filterTickets = (tickets: TicketType[], filterTransfer: TransferType[]): TicketType[] => {
    let filterTicks: TicketType[] = [];
    filterTransfer.forEach((valueFilter) => {
        switch (valueFilter) {
            case 'No_Transfers':
                filterTicks = filterTicks.concat(
                    ...tickets.filter(({ segments }) => segments[0].stops.length === 0 && segments[1].stops.length === 0)
                );
                break;
            case 'One_Transfer':
            case 'Two_Transfer':
            case 'Three_Transfer':
                filterTicks = filterTicks.concat(
                    ...tickets.filter(
                        ({ segments }) =>
                            (segments[0].stops.length === NumberTransfer[valueFilter] &&
                                segments[1].stops.length < NumberTransfer[valueFilter]) ||
                            (segments[1].stops.length === NumberTransfer[valueFilter] &&
                                segments[0].stops.length < NumberTransfer[valueFilter])
                    )
                );
                break;
            default:
                filterTicks = [];
        }
    });
    return filterTicks;
};

export {
    isAll,
    getTicketsId,
    getTickets,
    filterTickets
}
