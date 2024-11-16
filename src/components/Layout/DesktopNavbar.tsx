import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const DesktopNavbar = () => {
  return (
    <Box
      sx={{
        width: 80,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#222',
        color: '#fff',
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
      <NavLink to="/">
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <DashboardIcon sx={{ fontSize: 32 }} />
          <Box
            sx={{
              fontSize: 12,
              marginTop: 1,
            }}
          >
            Home
          </Box>
        </Box>
      </NavLink>
      <NavLink to="/tags">
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <DashboardIcon sx={{ fontSize: 32 }} />
          <Box
            sx={{
              fontSize: 12,
              marginTop: 1,
            }}
          >
            Home
          </Box>
        </Box>
      </NavLink>
    </Box>
  );
};

export default DesktopNavbar;
