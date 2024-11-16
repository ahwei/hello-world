import DashboardIcon from '@mui/icons-material/Dashboard';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
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
      <BottomNavigationAction
        label="Home"
        icon={<DashboardIcon />}
        component={NavLink}
        to="/"
        sx={{ color: '#fff' }}
      />
      <BottomNavigationAction
        label="Tags"
        icon={<DashboardIcon />}
        component={NavLink}
        to="/tags"
        sx={{ color: '#fff' }}
      />
    </BottomNavigation>
  );
};

export default MobileNavbar;
