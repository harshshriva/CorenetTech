import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/products">Product List</Button>
        <Button color="inherit" component={Link} to="/add-product">Add Product</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
