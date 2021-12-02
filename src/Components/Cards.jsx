import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Container } from '@material-ui/core';
import useStyles from '../styles';

const Cards = () => {
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
                {cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='Image Title' />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant='h5'>
                                    Heading
                                </Typography>
                                <Typography gutterBottom variant='subtitle1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi.
                                </Typography>
                                <CardActions>
                                    <Button size='small' color='primary'>View</Button>
                                    <Button size='small' color='primary'>Edit</Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container >
    )
}

export default Cards;

