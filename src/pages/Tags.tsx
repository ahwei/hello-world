import Tag from '@/components/Tag';
import { Box, Grid2, Typography } from '@mui/material';
import { useState } from 'react';
const Tags = () => {
  const [results] = useState<number[]>(new Array(30).fill(0));
  return (
    <Box display="flex" justifyContent="center" sx={{ pt: 3 }}>
      <Box sx={{ pb: 2, maxWidth: 900, position: 'relative' }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Typography variant="h4" color="primary">
            Tags
          </Typography>
        </Box>
        <Grid2 container spacing={2} sx={{ p: 2 }}>
          {results.map((_, index) => (
            <Grid2 key={index} size={{ xs: 2, md: 12 / 5 }}>
              <Tag />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Tags;
