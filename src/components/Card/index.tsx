import { User } from '@/types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = ({ user }: { user: User }) => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%', backgroundColor: 'transparent' }}>
      <CardMedia
        component="img"
        height="146"
        width="219"
        image="https://via.placeholder.com/278x146"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="primary">
          {user.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#B2B2B2' }}>
          {user.username}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
