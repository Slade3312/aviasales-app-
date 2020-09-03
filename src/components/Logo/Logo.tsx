import React from 'react';
import logoClass from './Logo.module.scss';
import logo from '../../img/logo/Logo.png';

export default function Logo(): JSX.Element {
  return (
    <div className={logoClass.wrapper}>
      <img className={logoClass['img-logo']} src={logo} alt="logo" />
    </div>
  );
}
