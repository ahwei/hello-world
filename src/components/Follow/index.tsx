import { Box, Tab, Tabs } from '@mui/material';
import { ReactNode, SyntheticEvent, useState } from 'react';
import FollowerCard from './FollowerCard';
interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      gap={2}
      {...other}
      sx={{ height: '100%', overflowY: 'auto' }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};

export const Follow = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          textColor="primary"
          sx={{
            '& .MuiTab-root': {
              color: 'grey',
              textTransform: 'none',
              '&:focus': {
                outline: 'none',
              },
              '&.Mui-focusVisible': {
                outline: 'none',
              },
            },
            '& .Mui-selected': {
              color: 'common.white',
            },
          }}
        >
          <Tab label="Followers" value={0} />
          <Tab label="Following" value={1} />
        </Tabs>
      </Box>
      <Box
        sx={{
          flex: 1,
          overflow: 'hidden',
        }}
      >
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {new Array(20).fill(null).map((_, index) => (
              <FollowerCard key={index} isFollowing={Math.random() < 0.5} />
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {new Array(10).fill(null).map((_, index) => (
              <FollowerCard key={index} isFollowing={Math.random() < 0.5} />
            ))}
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default Follow;
