
export type State = {
    filterTransfer: TransferType[],
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