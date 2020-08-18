import React from 'react';
import { Checkbox } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import filterClass from './Filter.module.scss';
import { State, TransferType } from '../../store/types';
import * as action from '../../store/action/actions';
import isAll from '../../selectors';

function mapStateToProps(state: State) {
  return {
    filterTransfer: state.filterTransfer,
  };
}

const mapDispatch = action;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Filter: React.FC<Props> = (props: Props) => {
  const { filterTransfer, filterAll, filterNone, filterOne, filterTwo, filterThree } = props;
  const all = isAll(filterTransfer);
  const noneTransfer = filterTransfer.indexOf(TransferType.NoTransfers) >= 0;
  const oneTransfer = filterTransfer.indexOf(TransferType.OneTransfer) >= 0;
  const twoTransfer = filterTransfer.indexOf(TransferType.TwoTransfer) >= 0;
  const threeTransfer = filterTransfer.indexOf(TransferType.ThreeTransfer) >= 0;

  return (
    <div className={filterClass.wrapper}>
      <h4 className={filterClass.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <Checkbox onChange={(ev: CheckboxChangeEvent) => filterAll(ev.target.checked)} checked={all}>
        Все
      </Checkbox>
      <br />
      <Checkbox onChange={(ev: CheckboxChangeEvent) => filterNone(ev.target.checked)} checked={noneTransfer}>
        Без пересадок
      </Checkbox>
      <br />
      <Checkbox onChange={(ev: CheckboxChangeEvent) => filterOne(ev.target.checked)} checked={oneTransfer}>
        1 пересадка
      </Checkbox>
      <br />
      <Checkbox onChange={(ev: CheckboxChangeEvent) => filterTwo(ev.target.checked)} checked={twoTransfer}>
        2 пересадки
      </Checkbox>
      <br />
      <Checkbox onChange={(ev: CheckboxChangeEvent) => filterThree(ev.target.checked)} checked={threeTransfer}>
        3 пересадки
      </Checkbox>
    </div>
  );
};

export default connector(Filter);
