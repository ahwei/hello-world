import { Card, CardContent, Skeleton } from '@mui/material';

const CustomCard = () => {
  return (
    <Card
      sx={{
        maxWidth: { sm: 345, xs: '100%' },
        width: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <Skeleton
        variant="rectangular"
        height={146}
        width={278}
        color="primary"
        sx={{ display: { sm: 'block', xs: 'none' } }}
      />
      <Skeleton
        variant="rectangular"
        height={223}
        width="100%"
        color="primary"
        sx={{ display: { sm: 'none', xs: 'block' } }}
      />
      <CardContent>
        <Skeleton variant="text" height={32} sx={{ mb: 1, width: '80%' }} />
        <Skeleton variant="text" height={20} sx={{ width: '40%' }} />
      </CardContent>
    </Card>
  );
};

export default CustomCard;
