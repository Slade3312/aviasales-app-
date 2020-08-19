import { StateFilter, ActionFilterType, ActionFilterTypeAll, TransferType } from '../types';

const initialState: StateFilter = {
  filterTransfer: [],
};

export default function reducerFilter(state: StateFilter = initialState, actions: ActionFilterType | ActionFilterTypeAll): StateFilter {
  switch (actions.type) {
    case 'ALL': {
      return {
        filterTransfer: actions.payload ? Object.values(TransferType) : []
      }
    }
    case TransferType.NoTransfers:
    case TransferType.OneTransfer:
    case TransferType.TwoTransfer:
    case TransferType.ThreeTransfer: {
      const newFilterTransfer = state.filterTransfer.filter(transfer => actions.type !== transfer);
      if (actions.payload) {
        newFilterTransfer.push(actions.type)
      }
      return {
        filterTransfer: newFilterTransfer
      }
    }
    default: return state;
  }
}


