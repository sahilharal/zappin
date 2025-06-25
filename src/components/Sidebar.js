import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const drawerWidth = 240;
const collapsedWidth = 64;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
  { text: 'Sub Categories', icon: <CategoryIcon />, path: '/subcategories' },
  { text: 'Products', icon: <StorefrontIcon />, path: '/products' },
  { text: 'Outlets', icon: <StorefrontIcon />, path: '/outlets' },
  { text: 'Offers & Coupons', icon: <LocalOfferIcon />, path: '/offers' },
  { text: 'Orders', icon: <ShoppingCartIcon />, path: '/orders' },
  { text: 'Users', icon: <PeopleIcon />, path: '/users' },
  { text: 'Sections', icon: <ViewModuleIcon />, path: '/sections' },
  { text: 'Contents', icon: <ViewModuleIcon />, path: '/contents' },
  { text: 'Expenses', icon: <AttachMoneyIcon />, path: '/expenses' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? collapsedWidth : drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#2C3E50',
          color: 'white',
          transition: 'width 0.2s',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: collapsed ? 'center' : 'flex-start' }}>
        {!collapsed && (
          <Typography variant="h5" component="div" sx={{ color: 'white' }}>
            Zaapin
          </Typography>
        )}
      </Box>
      <List>
        {menuItems.map((item) => (
          <Tooltip title={collapsed ? item.text : ''} placement="right" key={item.text}>
            <ListItem
              button
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                justifyContent: collapsed ? 'center' : 'flex-start',
                px: collapsed ? 1 : 2,
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: collapsed ? 0 : 2, justifyContent: 'center' }}>
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar; 