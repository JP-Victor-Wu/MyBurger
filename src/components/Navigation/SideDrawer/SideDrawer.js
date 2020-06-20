import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

function SideDrawer(props) {

    let attachClasses = [classes.SideDrawer, classes.Close]

    if(props.open){
        attachClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>

            </div>
        </Aux>

    );
}

export default SideDrawer;