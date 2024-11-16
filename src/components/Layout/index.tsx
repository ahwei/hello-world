import { Box, styled } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const RootBox = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  overflowY: 'auto',
  display: 'flex',
  backgroundColor: theme.palette.common.black,
}));

const Layout = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <RootBox>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <Box
        sx={{
          width: '100%',
          padding: 3,
          marginBottom: isMobile ? '56px' : 0,
        }}
      >
        <Outlet />
      </Box>
    </RootBox>
  );
};

export default Layout;
