import React from 'react'
import { Typography } from '@material-ui/core';
import useStyles from '../styles';


const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Lorem, ipsum dolor.
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary' gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
        </footer>
    )
}

export default Footer
