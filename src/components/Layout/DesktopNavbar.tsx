import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import AppIcon from './AppIcon';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tags', label: 'Tags' },
];

const DesktopNavbar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 80,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#222',
        padding: 2,
      }}
    >
      <Box sx={{ mt: 1, mb: 1 }}>
        <img
          src="./logo.png"
          alt="logo"
          style={{ cursor: 'pointer' }}
          width={50}
        />
      </Box>
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <ListItemButton
              key={item.to}
              to={item.to}
              component={NavLink}
              sx={{
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                height: 60,
                mb: 2,
              }}
              disableRipple
            >
              <AppIcon active={isActive} />
              {isActive && (
                <ListItemText
                  primary={item.label}
                  sx={{ fontSize: 10 }}
                  primaryTypographyProps={{ color: 'white' }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default DesktopNavbar;
