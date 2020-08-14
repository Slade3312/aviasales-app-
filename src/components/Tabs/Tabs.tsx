import React from 'react';
import tabsClass from './Tabs.module.scss';

const Tabs: React.FC = () => {
  const onClickCheap = () => {
    console.log('Cheap');
  };

  const onClickFast = () => {
    console.log('Fast');
  };

  return (
    <div className={tabsClass.wrapper}>
      <button type="button" className={`${tabsClass.button} ${tabsClass.active}`} onClick={onClickCheap}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className={tabsClass.button} onClick={onClickFast}>
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};

export default Tabs;
