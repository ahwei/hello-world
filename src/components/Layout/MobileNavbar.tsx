import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import AppIcon from './AppIcon';
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tags', label: 'Tags' },
];

const MobileNavbar = () => {
  const location = useLocation();

  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#222',
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => (
        <BottomNavigationAction
          key={item.to}
          label={item.label}
          icon={<AppIcon active={location.pathname === item.to} />}
          component={NavLink}
          to={item.to}
          sx={{ color: location.pathname === item.to ? '#fff' : '#888' }}
        />
      ))}
    </BottomNavigation>
  );
};

export default MobileNavbar;
