import React from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import filterClass from './Filter.module.scss';

const Filter: React.FC = (props: any) => {
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

function mapStateToProps(state: any) {
  return {
    filter: state.filter,
  };
}

export default connect(mapStateToProps)(Filter);
