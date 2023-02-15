import { AppBar, IconButton, Toolbar, Typography ,Button ,Stack, Grid} from '@mui/material'
//import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemonIcon'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MuiDrer from './MuiDrer';
//import { Stack } from '@mui/system';

export default function Muinavbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
      setAnchorEl(null);
      console.log(e.target.value)
    };

  return (
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
    <AppBar position='static'>
        <Toolbar>
<IconButton size='large' edge='start' color='inheret' aria-label='logo'>
<CatchingPokemonIcon/>
</IconButton>
<Typography variant='h6' sx={{flexGrow:1}}>
  PokemonApp
</Typography >

<Stack  direction='row' spacing={2} sx={{
    

}}>
    <Button color='inherit'>Contact</Button>
    <Button color='inherit'>About</Button>
    <Button color='inherit'>Services</Button>
    <Button color='inherit'>Login</Button>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon/>}
      >
        Dashboard
      </Button>
  </Stack>
  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Toolbar>
    </AppBar>
    <MuiDrer  />
    </Grid>
    </Grid>
  )
}
