import { Card, CardActionArea, CardContent, Skeleton } from '@mui/material';

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345, width: 219 }}>
      <CardActionArea>
        <Skeleton variant="rectangular" height={140} />
        <CardContent>
          <Skeleton variant="text" height={32} sx={{ mb: 1 }} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
