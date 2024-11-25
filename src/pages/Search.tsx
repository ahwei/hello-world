import ButtonLarge from '@/components/Button/ButtonLarge';
import CustomCard from '@/components/Card';
import SkeletonCard from '@/components/Card/SkeletonCard';
import type { Response, User } from '@/types';
import axios from '@/utils/axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Grid2, IconButton, Typography } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { keyword, pageSize } = location.state || {};

  if (!pageSize) {
    return <Navigate to="/" replace />;
  }

  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Response<User>>({
      initialPageParam: 1,
      queryKey: ['users', { pageSize, keyword }],
      queryFn: async ({ pageParam = 1 }) => {
        try {
          const response = await axios.get<Response<User>>('/users/all', {
            params: {
              keyword,
              page: pageParam,
              pageSize,
            },
          });
          return response.data;
        } catch (error) {
          console.error(error);
          throw new Error('Failed to fetch users');
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      retry: 1,
      retryDelay: 1000,
    });

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 750,
        width: '100%',
        position: 'relative',
        pt: { xs: 0, sm: 9 },
      }}
    >
      <IconButton
        color="primary"
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          top: '70px',
          left: '-20px',
          display: { xs: 'none', sm: 'block' },
          fontSize: 20,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h5" color="primary" sx={{ fontSize: { sm: 30 } }}>
          Results
        </Typography>
      </Box>

      <Grid2
        container
        spacing={2}
        sx={{ pt: { xs: 6, sm: 3.5 } }}
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
        alignItems="center"
      >
        {data?.pages?.map((pageData, pageIndex) =>
          pageData.data.map((item, itemIndex) => (
            <Grid2
              key={`${pageIndex}-${itemIndex}`}
              size={{ xs: 12, md: 4 }}
              sx={{ mb: { xs: 3, sm: 0 } }}
            >
              <CustomCard user={item} />
            </Grid2>
          )),
        )}
        {(isLoading || isFetching) &&
          new Array(pageSize).fill(0).map((_, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
              <SkeletonCard />
            </Grid2>
          ))}
      </Grid2>

      <ButtonLarge
        onClick={handleLoadMore}
        disabled={isFetching || !hasNextPage}
      >
        {isFetching ? 'Loading...' : 'More'}
      </ButtonLarge>
    </Box>
  );
};

export default Search;
