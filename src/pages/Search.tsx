import ButtonLarge from '@/components/Button/ButtonLarge';
import CustomCard from '@/components/Card';
import axios from '@/utils/axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Grid2, IconButton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}

interface SearchResponse {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: User[];
}

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { keyword, pageSize } = location.state || {};
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useQuery<SearchResponse>({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const response = await axios.get<SearchResponse>('/users/all', {
          params: {
            keyword,
            page,
            pageSize,
          },
        });
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch users');
      }
    },
    retry: 1,
    retryDelay: 1000,
  });

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box sx={{ pb: 2, maxWidth: 900, position: 'relative' }}>
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

      <Grid2 container spacing={2} sx={{ p: 2 }}>
        {data?.data?.map((item, index) => (
          <Grid2 key={index} size={{ xs: 12, md: 4 }}>
            <CustomCard />
          </Grid2>
        ))}
      </Grid2>

      <ButtonLarge
        onClick={handleLoadMore}
        disabled={isFetching || !data?.pageSize}
      >
        {isFetching ? 'Loading...' : 'More'}
      </ButtonLarge>
    </Box>
  );
};

export default Search;
