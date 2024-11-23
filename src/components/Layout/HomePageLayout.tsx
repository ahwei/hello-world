import Follow from '@/components/Follow';
import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';
const HomePageLayout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflowY: 'auto',
          paddingTop: '50px',
        }}
      >
        <Outlet />
      </Box>
      <Box
        sx={{
          width: 375,
          display: 'none',
          '@media (min-width: 1440px)': {
            display: 'block',
          },
        }}
      >
        <Follow />
      </Box>
    </Box>
  );
};

export default HomePageLayout;
