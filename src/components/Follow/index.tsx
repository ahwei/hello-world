import { Box, Tab, Tabs } from '@mui/material';
import { ReactNode, SyntheticEvent, useState } from 'react';
import InfiniteFollower from './InfiniteFollower';

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
      {...other}
      sx={{
        height: '100%',
        overflowY: 'auto',
        flexDirection: 'column',
      }}
    >
      {value === index && children}
    </Box>
  );
};

export const Follow = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
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
          height: '100%',
        }}
      >
        <CustomTabPanel value={value} index={0}>
          <InfiniteFollower />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <InfiniteFollower sourceType="Following" />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default Follow;
