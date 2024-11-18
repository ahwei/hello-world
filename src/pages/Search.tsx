import ButtonLarge from '@/components/Button/ButtonLarge';
import CustomCard from '@/components/Card';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Grid2, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const navigate = useNavigate();
  const [results] = useState<number[]>(new Array(9).fill(0));

  return (
    <Box sx={{ pb: 2 }}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <IconButton color="primary" onClick={() => navigate('/')}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h4" color="primary">
          Results
        </Typography>
      </Box>
      <Grid2 container spacing={2} sx={{ p: 2 }}>
        {results.map((_, index) => (
          <Grid2 key={index} size={{ xs: 12, md: 4 }}>
            <CustomCard />
          </Grid2>
        ))}
      </Grid2>

      <ButtonLarge onClick={() => {}}>More</ButtonLarge>
    </Box>
  );
};

export default Search;
