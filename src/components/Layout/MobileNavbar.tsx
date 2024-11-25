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

  return (
    <>
      <AppBar sx={{ backgroundColor: 'common.black', boxShadow: 'none' }}>
        <Toolbar sx={{ height: 70, p: 3 }}>
          {location.pathname == '/' && (
            <img src="/logo.png" alt="logo" width={35} height={15} />
          )}
          {location.pathname !== '/' && (
            <>
              <IconButton
                color="primary"
                onClick={() => navigate('/')}
                sx={{ p: 0, mr: 1 }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <Typography
                variant="h5"
                component="div"
                color="primary"
                sx={{ flexGrow: 1 }}
              >
                Home page
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
      {location.pathname == '/' && (
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
              sx={{
                color: location.pathname === item.to ? '#fff' : '#888',
                maxWidth: '50px',
              }}
            />
          ))}
        </BottomNavigation>
      )}
    </>
  );
};

export default MobileNavbar;
