import { ActionFilterType, TransferType, ActionFilterTypeAll, ActionFilterTabs } from '../types';

const filterAll = (payload: boolean): ActionFilterTypeAll => ({ type: 'ALL', payload });

const filterNone = (payload: boolean): ActionFilterType => ({ type: TransferType.NoTransfers, payload });

const filterOne = (payload: boolean): ActionFilterType => ({ type: TransferType.OneTransfer, payload });

const filterTwo = (payload: boolean): ActionFilterType => ({ type: TransferType.TwoTransfer, payload });

const filterThree = (payload: boolean): ActionFilterType => ({ type: TransferType.ThreeTransfer, payload });

const filterTabs = (payload: string): ActionFilterTabs => ({ type: 'Toggle_Tabs', payload })




export {
    filterAll,
    filterNone,
    filterOne,
    filterTwo,
    filterThree,
    filterTabs
}