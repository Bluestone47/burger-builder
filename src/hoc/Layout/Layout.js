import React, { useState } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const Layout = props => {

  const [sideDrawerVisible, setSideDrawerVisible] = useState(false)

  const sideDrawerClosedHandler = () => {
    setSideDrawerVisible(false)
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerVisible(!sideDrawerVisible)
  }

  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        open={sideDrawerVisible}
        closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )

}

export default Layout;