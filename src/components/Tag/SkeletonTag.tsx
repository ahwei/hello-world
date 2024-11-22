import { Box, Skeleton } from '@mui/material';

const SkeletonTag = () => {
  return (
    <Box>
      <Skeleton width={150} height={150} variant="rounded" />
      <Skeleton variant="text" width={120} />
      <Skeleton
        variant="text"
        width={80}
        sx={{ fontSize: 10, color: '#B2B2B2' }}
      />
    </Box>
  );
};

export default SkeletonTag;
