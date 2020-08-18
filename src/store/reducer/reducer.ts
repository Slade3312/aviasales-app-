import { State, ActionFilterType, ActionFilterTypeAll, TransferType } from '../types';

const initialState: State = {
  filterTransfer: [],
};

export default function reducer(state: State = initialState, actions: ActionFilterType | ActionFilterTypeAll): State {
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


