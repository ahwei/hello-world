import { Box, Skeleton } from '@mui/material';

const FollowerCardSkeleton = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      width="100%"
      height={45}
      sx={{ mb: 2 }}
    >
      <Box>
        <Skeleton variant="rounded" width={40} height={40} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          position="absolute"
          top={0}
          left={55}
        >
          <Skeleton
            variant="text"
            width={100}
            height={25}
            sx={{ mt: -0.125 }}
          />
          <Skeleton
            variant="text"
            width={80}
            height={18}
            sx={{ opacity: 0.5 }}
          />
        </Box>
      </Box>
      <Box>
        <Skeleton
          variant="rounded"
          width={80}
          height={28}
          sx={{ borderRadius: '20px' }}
        />
      </Box>
    </Box>
  );
};

export default FollowerCardSkeleton;
