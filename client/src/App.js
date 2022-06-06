import './App.css';
import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import img1 from './images/photo1.webp';
function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={img1} alt="img1" height="800"/>
      </AppBar>
    </Container>
  );
}

export default App;
