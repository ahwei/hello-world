import { Card, CardContent, Skeleton } from '@mui/material';

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%', backgroundColor: 'transparent' }}>
      <Skeleton
        variant="rectangular"
        height={146}
        width={278}
        color="primary"
      />
      <CardContent>
        <Skeleton variant="text" height={32} sx={{ mb: 1, width: '80%' }} />
        <Skeleton variant="text" height={20} sx={{ width: '40%' }} />
      </CardContent>
    </Card>
  );
};

export default CustomCard;
