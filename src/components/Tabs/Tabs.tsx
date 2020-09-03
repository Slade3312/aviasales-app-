import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import tabsClass from './Tabs.module.scss';
import { State } from '../../store/types';
import { filterTabs } from '../../store/action/actionsFilter';

function mapStateToProps(state: State) {
  const { tabs, filterTransfer } = state.reducerFilter;
  return {
    tabs,
    filterTransfer,
  };
}

const connector = connect(mapStateToProps, { filterTabs });

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

// eslint-disable-next-line no-shadow
const Tabs: React.FC<Props> = ({ filterTabs, tabs }) => {
  const onClickCheap = () => {
    filterTabs('Cheap');
  };

  const onClickFast = () => {
    filterTabs('Fast');
  };

  return (
    <div className={tabsClass.wrapper}>
      <button
        type="button"
        className={`${tabsClass.button} ${tabs === 'Cheap' && tabsClass.active}`}
        onClick={onClickCheap}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={`${tabsClass.button} ${tabs === 'Fast' && tabsClass.active}`}
        onClick={onClickFast}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};

export default connector(Tabs);
