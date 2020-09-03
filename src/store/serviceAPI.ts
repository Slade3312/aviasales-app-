import { resId, responseTicket } from "./types";

const getTicketsId = async (): Promise<resId> => {
    const res = await fetch('https://front-test.beta.aviasales.ru/search');
    return res.json()
}

const getTickets = async (id: string): Promise<responseTicket> => {
    const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
    return res.json()
}

export {
    getTicketsId,
    getTickets
}