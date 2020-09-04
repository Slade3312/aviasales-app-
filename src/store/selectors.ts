import { TransferType, NumberTransfer, TicketType, FilterTabsType, SetTabsType } from "./types";


const isAll = (filter: TransferType[]): boolean => {
    const allFilterTypes = Object.values(TransferType);
    return filter.length === allFilterTypes.length;
}

const filterTickets = (tickets: TicketType[]) => {

    return (filterTransfer: TransferType[]): FilterTabsType => {
        let filterTicks: TicketType[] = [];
        filterTransfer.forEach((valueFilter) => {
            switch (valueFilter) {
                case TransferType.NoTransfers:
                    filterTicks = filterTicks.concat(
                        ...tickets.filter(({ segments }) => segments[0].stops.length === 0 && segments[1].stops.length === 0)
                    );
                    break;
                case TransferType.OneTransfer:
                case TransferType.TwoTransfer:
                case TransferType.ThreeTransfer:
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
        return (tabs: string): TicketType[] => {
            switch (tabs) {
                case SetTabsType.Cheap: {
                    return filterTicks.sort((a, b) => a.price - b.price)
                }
                case SetTabsType.Fast: {
                    return filterTicks.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) -
                        (b.segments[0].duration + b.segments[1].duration))
                }
                default: return filterTicks
            }


        }
    }

};

export {
    isAll,
    filterTickets
}
