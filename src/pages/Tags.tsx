import Tag from '@/components/Tag';
import SkeletonTag from '@/components/Tag/SkeletonTag';
import type { ITag } from '@/types';
import axios from '@/utils/axios';
import { Box, Grid2, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const Tags = () => {
  const { data, isLoading } = useQuery<ITag[]>({
    queryKey: ['tags'],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await axios.get<ITag[]>('/tags', {
          params: {
            page: pageParam,
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

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ p: 3, pt: { xs: '70px', sm: 0 }, pb: { xs: '70px', sm: 0 } }}
    >
      <Box sx={{ pb: 2, maxWidth: 900, position: 'relative' }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ mb: 3, mt: 2 }}
        >
          <Typography variant="h5" color="primary">
            Tags
          </Typography>
        </Box>
        <Grid2 container spacing={2}>
          {data?.map((item, itemIndex) => (
            <Grid2 key={`${itemIndex}`} size={{ xs: 6, md: 12 / 5 }}>
              <Tag item={item} />
            </Grid2>
          ))}
          {isLoading &&
            new Array(15).fill(0).map((_, index) => (
              <Grid2 key={`${index}`} size={{ xs: 6, md: 12 / 5 }}>
                <SkeletonTag />
              </Grid2>
            ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Tags;
