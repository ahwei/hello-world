import ButtonLarge from '@/components/Button/ButtonLarge';
import Input from '@/components/Input';
import Slider from '@/components/Slider';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const marks = [
  {
    value: 1,
    label: 3,
  },
  {
    value: 2,
    label: 6,
  },
  {
    value: 3,
    label: 9,
  },
  {
    value: 4,
    label: 12,
  },
  {
    value: 5,
    label: 15,
  },
  {
    value: 6,
    label: 50,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [resultsPerPage, setResultsPerPage] = useState<number>(5);
  const [keyword, setKeyWord] = useState<string>('');

  return (
    <>
      <Box
        flexDirection="column"
        display="flex"
        sx={{
          maxWidth: 700,
          width: '100%',
          mt: { xs: 0, sm: 6 },
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          sx={{ mb: (theme) => theme.spacing(3) }}
        >
          Search
        </Typography>
        <Input
          sx={{
            width: '100%',
            mb: {
              xs: 2.5,
              sm: 4.5,
            },
          }}
          placeholder="keyword"
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
        />

        <Typography
          variant="h5"
          color="primary"
          sx={{ mb: (theme) => theme.spacing(1.5) }}
        >
          # Of results per page
        </Typography>
        <Box
          flexDirection="row"
          display="flex"
          alignItems="flex-end"
          gap={1}
          sx={{ mb: (theme) => theme.spacing(1) }}
        >
          <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
            {marks.find((mark) => mark.value === resultsPerPage)?.label}
          </Typography>
          <Typography variant="body1" color="primary">
            results
          </Typography>
        </Box>

        <Slider
          value={resultsPerPage}
          onChange={(_, value) => {
            if (typeof value === 'number') {
              setResultsPerPage(value);
            }
          }}
          marks={marks}
        />
      </Box>
      <Box
        sx={{
          marginTop: 'auto',
          maxWidth: 700,
          width: '100%',
          justifyContent: { xs: 'center', sm: 'flex-start' },
          display: 'flex',
          pb: {
            xs: (theme) => theme.spacing(6),
            sm: 8,
          },
        }}
      >
        <ButtonLarge
          sx={{}}
          onClick={() => {
            navigate('/search', {
              state: {
                keyword,
                pageSize: marks.find((mark) => mark.value == resultsPerPage)
                  ?.label,
              },
            });
          }}
        >
          SEARCH
        </ButtonLarge>
      </Box>
    </>
  );
};

export default Home;
