import type { Response, User } from '@/types';
import axios from '@/utils/axios';
import { Box } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import FollowerCard from './FollowerCard';
interface Props {
  sourceType?: 'Followers' | 'Following';
}

const InfiniteFollower = ({ sourceType = 'Followers' }: Props) => {
  const { ref, inView } = useInView();

  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Response<User>>({
      initialPageParam: 1,
      queryKey: [sourceType],
      queryFn: async ({ pageParam = 1 }) => {
        try {
          const response = await axios.get<Response<User>>(
            `/users/${sourceType === 'Followers' ? 'all' : 'friends'}`,
            {
              params: {
                page: pageParam,
                pageSize: 20,
              },
            },
          );
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

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <Box sx={{ flex: 1, p: 2 }} gap={2}>
      {data?.pages?.map((pageData, pageIndex) =>
        pageData.data.map((item, itemIndex) => (
          <FollowerCard key={`${pageIndex}-${itemIndex}`} item={item} />
        )),
      )}

      {(isFetching || isLoading) && (
        <Box sx={{ color: 'common.white' }}>Fetching...</Box>
      )}

      {!isFetching && !isLoading && <Box ref={ref} />}
    </Box>
  );
};

export default InfiniteFollower;
