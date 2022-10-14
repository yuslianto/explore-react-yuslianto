import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' component='div'>
            Sepatu Bagus
          </Typography>
          <Button color='inherit'>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
