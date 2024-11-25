import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import AppIcon from './AppIcon';
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tags', label: 'Tags' },
];

const MobileNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(
    'location.pathname',
    location.pathname,
    location.pathname !== '/',
  );
  return (
    <>
      {location.pathname !== '/' && (
        <AppBar sx={{ backgroundColor: 'common.black' }}>
          <Toolbar>
            <IconButton color="primary" onClick={() => navigate('/')}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Home page
            </Typography>
          </Toolbar>
        </AppBar>
      )}

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
    </>
  );
};

export default MobileNavbar;
