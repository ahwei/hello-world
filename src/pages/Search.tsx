import CustomCard from '@/components/Card';
import { Grid2 } from '@mui/material';
import { useState } from 'react';

const Search = () => {
  const [results] = useState<number[]>(new Array(9).fill(0));

  return (
    <Grid2 container spacing={2} sx={{ p: 2 }}>
      {results.map((_, index) => (
        <Grid2 key={index} size={{ xs: 12, md: 4 }}>
          <CustomCard />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Search;
