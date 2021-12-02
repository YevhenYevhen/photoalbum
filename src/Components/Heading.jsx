import React from 'react'
import { Typography, Button, Grid, Container } from '@material-ui/core';
import useStyles from '../styles';


const Heading = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth='sm'>
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                    Photo Album
                </Typography>
                <Typography variant='h6' align='center' color='textSecondary' paragraph>
                    Adipisicing eu ex sint reprehenderit labore labore incididunt sit anim consequat laborum qui culpa. Adipisicing eu ex sint reprehenderit labore.
                </Typography>
                <div className={classes.buttons}>
                    <Grid container spacing={2} justify='center'>
                        <Grid item>
                            <Button variant='contained' color='primary'>Click</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='outlined' color='primary'>View</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>

    )
}

export default Heading;
