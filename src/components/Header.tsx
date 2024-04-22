import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerContext } from './DrawerContext';

const Header: React.FC = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  const handleMenuClick = () => {
    console.log("Menu button clicked");  // ログを追加
    toggleDrawerOpen();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}  // handleMenuClick を呼び出すように変更
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          sheadonz's Profile
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;  // ここでデフォルトエクスポートを追加
