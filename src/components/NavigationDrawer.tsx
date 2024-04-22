import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import { useDrawerContext } from './DrawerContext';

const NavigationDrawer: React.FC = () => {
  const navigate = useNavigate();
  const { isDrawerOpen, toggleDrawerClose } = useDrawerContext();

  const handleListItemClick = (path: string) => {
    toggleDrawerClose(); // Drawerを閉じる
    navigate(path);
  };

  return (
    <Drawer open={isDrawerOpen} onClose={toggleDrawerClose}>
      <List>
        <ListItem  onClick={() => handleListItemClick('/')}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Biography" />
        </ListItem>
        <ListItem  onClick={() => handleListItemClick('/works')}>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText primary="Works" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
