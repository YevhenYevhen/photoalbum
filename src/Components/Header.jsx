import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import React from 'react'
import useStyles from '../styles';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera className={classes.icon} />
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

