import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
function Layout(props) {
    return (
        <Aux>
            <Toolbar></Toolbar>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;