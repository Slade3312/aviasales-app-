import { ActionFilterType, TransferType, FilterType, ActionFilterTabsType } from '../types';

const filterAll = (payload: boolean): ActionFilterType => ({ type: FilterType.All, payload });

const filterNone = (payload: boolean): ActionFilterType => ({ type: TransferType.NoTransfers, payload });

const filterOne = (payload: boolean): ActionFilterType => ({ type: TransferType.OneTransfer, payload });

const filterTwo = (payload: boolean): ActionFilterType => ({ type: TransferType.TwoTransfer, payload });

const filterThree = (payload: boolean): ActionFilterType => ({ type: TransferType.ThreeTransfer, payload });

const filterTabs = (payload: string): ActionFilterTabsType => ({ type: FilterType.ToggleTabs, payload })




export {
    filterAll,
    filterNone,
    filterOne,
    filterTwo,
    filterThree,
    filterTabs
}