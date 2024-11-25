import { Badge, Box, List, ListItemButton, ListItemText } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import AppIcon from './AppIcon';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tags', label: 'Tags', badge: true },
];

const DesktopNavbar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: '80px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#222',
        padding: 3,
      }}
    >
      <Box sx={{ mt: '22px', mb: '22px' }}>
        <img
          src="/logo.png"
          alt="logo"
          style={{ cursor: 'pointer' }}
          width={35}
          height={15}
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
                mb: '22px',
              }}
              disableRipple
            >
              <Badge
                variant="dot"
                invisible={!item.badge}
                sx={{ '& .MuiBadge-dot': { backgroundColor: '#00D1FF' } }}
              >
                <AppIcon active={isActive} />
              </Badge>
              {isActive && (
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    color: 'white',
                    fontSize: '12px',
                  }}
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
