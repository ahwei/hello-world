import ButtonLarge from '@/components/Button/ButtonLarge';
import CustomCard from '@/components/Card';
import SkeletonCard from '@/components/Card/SkeletonCard';
import type { Response, User } from '@/types';
import axios from '@/utils/axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Grid2, IconButton, Typography } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { keyword, pageSize } = location.state || {};

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
    <Box sx={{ pb: 2, maxWidth: 900, width: '100%', position: 'relative' }}>
      <IconButton
        color="primary"
        onClick={() => navigate('/')}
        sx={{ position: 'absolute', top: 0, left: -40 }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h4" color="primary">
          Results for: {keyword}
        </Typography>
      </Box>

      <Grid2 container spacing={2} sx={{ p: 2 }} justifyContent="flex-start">
        {data?.pages?.map((pageData, pageIndex) =>
          pageData.data.map((item, itemIndex) => (
            <Grid2 key={`${pageIndex}-${itemIndex}`} size={{ xs: 12, md: 4 }}>
              <CustomCard user={item} />
            </Grid2>
          )),
        )}
        {(isLoading || isFetching) &&
          new Array(4).fill(0).map((_, index) => (
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
