import React from 'react';
import filterClass from './Filter.module.scss';
import { Checkbox } from 'antd';

const Filter: React.FC = () => {
  return (
    <div className={filterClass.wrapper}>
      <h4 className={filterClass.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <Checkbox onChange={() => console.log('all')}> Все</Checkbox>
      <br />
      <Checkbox onChange={() => console.log('none')}> Без пересадок</Checkbox>
      <br />
      <Checkbox onChange={() => console.log(1)}> 1 пересадка</Checkbox>
      <br />
      <Checkbox onChange={() => console.log(2)}> 2 пересадки</Checkbox>
      <br />
      <Checkbox onChange={() => console.log(3)}> 3 пересадки</Checkbox>
    </div>
  );
};

export default Filter;
