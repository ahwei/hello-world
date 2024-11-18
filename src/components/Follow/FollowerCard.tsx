import ButtonNormal from '@/components/Button/ButtonNormal';
import { Avatar, Box, Typography } from '@mui/material';

interface FollowerCardProps {
  isFollowing?: boolean;
}

const FollowerCard = ({ isFollowing }: FollowerCardProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      width="100%"
      height={45}
    >
      <Box>
        <Avatar
          src="https://via.placeholder.com/40"
          alt="Rectangle"
          sx={{ width: 40, height: 40 }}
          variant="rounded"
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          position="absolute"
          top={0}
          left={55}
        >
          <Typography variant="body1" color="white" sx={{ mt: -0.125 }}>
            FullName
          </Typography>
          <Typography variant="body2" color="white" sx={{ opacity: 0.5 }}>
            @username
          </Typography>
        </Box>
      </Box>
      <Box>
        <ButtonNormal variant={isFollowing ? 'contained' : 'outlined'}>
          {isFollowing ? 'Following' : 'Follow'}
        </ButtonNormal>
      </Box>
    </Box>
  );
};

export default FollowerCard;