import { User } from '@/types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = ({ user }: { user: User }) => {
  return (
    <Card
      sx={{
        maxWidth: { sm: 345, xs: '100%' },
        width: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <CardMedia
        component="img"
        height="146"
        width="219"
        image="https://via.placeholder.com/278x146"
        sx={{ display: { sm: 'block', xs: 'none' } }}
      />
      <CardMedia
        component="img"
        height="223"
        width="100%"
        image="https://via.placeholder.com/335x223"
        sx={{ display: { sm: 'none', xs: 'block' } }}
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
