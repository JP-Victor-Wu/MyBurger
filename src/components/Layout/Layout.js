import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true,
    }
    
    sideDrawerClose = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggle = () => {
        this.setState((prevState)=> {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggle}  />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClose} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

export default Layout;