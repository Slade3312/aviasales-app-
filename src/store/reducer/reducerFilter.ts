import { StateFilter, ActionFilterType, TransferType, FilterType, ActionFilterTabsType } from '../types';

const initialState: StateFilter = {
  filterTransfer: [],
  tabs: 'Cheap'
};

export default function reducerFilter(state: StateFilter = initialState, action: ActionFilterType | ActionFilterTabsType): StateFilter {
  switch (action.type) {
    case FilterType.All: {
      return {
        ...state,
        filterTransfer: action.payload ? Object.values(TransferType) : []
      }
    }
    case TransferType.NoTransfers:
    case TransferType.OneTransfer:
    case TransferType.TwoTransfer:
    case TransferType.ThreeTransfer: {
      const newFilterTransfer = state.filterTransfer.filter(transfer => action.type !== transfer);
      if (action.payload) {
        newFilterTransfer.push(action.type)
      }
      return {
        ...state,
        filterTransfer: newFilterTransfer
      }
    }
    case FilterType.ToggleTabs: {
      return {
        ...state,
        tabs: action.payload
      }
    }
    default: return state;
  }
}


