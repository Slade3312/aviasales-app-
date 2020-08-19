import { TransferType, resId, responseTicket } from "./types";


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

export {
    isAll,
    getTicketsId,
    getTickets
}
