import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import img1 from './images/photo1.webp';
import Form from './components/Form/Form';
import Posts from './components/Posts/Post';
import styleApp from './styles'
function App() {
  const classes = styleApp();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={img1} alt="img1" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
