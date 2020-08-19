import { ActionFilterType, TransferType, ActionFilterTypeAll } from '../types';

const filterAll = (payload: boolean): ActionFilterTypeAll => ({ type: 'ALL', payload });

const filterNone = (payload: boolean): ActionFilterType => ({ type: TransferType.NoTransfers, payload });

const filterOne = (payload: boolean): ActionFilterType => ({ type: TransferType.OneTransfer, payload });

const filterTwo = (payload: boolean): ActionFilterType => ({ type: TransferType.TwoTransfer, payload });

const filterThree = (payload: boolean): ActionFilterType => ({ type: TransferType.ThreeTransfer, payload });




export {
    filterAll,
    filterNone,
    filterOne,
    filterTwo,
    filterThree,
}