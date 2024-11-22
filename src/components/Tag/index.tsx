import type { ITag } from '@/types';
import { Box, Typography } from '@mui/material';

const Tag = ({ item }: { item: ITag }) => {
  return (
    <Box>
      <Box
        sx={{
          width: 150,
          height: 150,
          background: 'rgba(255,255,255,0.06)',
          p: 1,
        }}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Box
          sx={{
            border: '4px solid white',
            p: 1,
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            sx={{
              fontWeight: 700,
              maxWidth: 120,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item.name}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" color="primary">
        {item.name}
      </Typography>
      <Typography
        variant="caption"
        color="primary"
        sx={{ fontSize: 10, color: '#B2B2B2' }}
      >
        {item.count} Results
      </Typography>
    </Box>
  );
};

export default Tag;
