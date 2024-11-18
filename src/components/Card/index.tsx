import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%', backgroundColor: 'transparent' }}>
      <CardMedia
        component="img"
        height="146"
        width="219"
        image="https://via.placeholder.com/219x146"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="primary">
          This is a title
        </Typography>
        <Typography variant="body2" sx={{ color: '#B2B2B2' }}>
          by username
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
