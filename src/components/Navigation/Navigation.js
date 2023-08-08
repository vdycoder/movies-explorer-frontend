import React, { useState } from 'react';

import './Navigation.css';
import NavigationTab from '../NavigationTab/NavigationTab';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import OverflowNav from '../OverflowNav/OverflowNav';

function Navigation(props) {
  const [ isOverflowActive, setIsOverflowActive ] = useState(false);

  function handleBurgerBtnClick() {
    setIsOverflowActive(!isOverflowActive);
  }

  return (
    <>
    <NavigationTab />
    <BurgerBtn onClick={handleBurgerBtnClick} />
    <OverflowNav isActive={isOverflowActive} onClick={handleBurgerBtnClick}/>
    </>
  );
}

export default Navigation;
