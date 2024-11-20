import ButtonLarge from '@/components/Button/ButtonLarge';
import Input from '@/components/Input';
import Slider from '@/components/Slider';
import { Box, Divider, Typography } from '@mui/material';
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
  const [resultsPerPage, setResultsPerPage] = useState<number>(2);
  const [keyword, setKeyWord] = useState<string>('');

  return (
    <>
      <Box
        flexDirection="column"
        display="flex"
        gap={4}
        sx={{ maxWidth: 1200, minWidth: 800 }}
      >
        <Typography variant="h4" color="primary">
          Search
        </Typography>
        <Input
          sx={{ width: '100%' }}
          placeholder="keyword"
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <Divider />
        <Typography variant="h5" color="primary">
          # of results per page
        </Typography>
        <Box flexDirection="row" display="flex" alignItems="flex-end" gap={1}>
          <Typography variant="h4" color="primary">
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
          maxWidth: 1200,
          minWidth: 800,
          justifyContent: { xs: 'center', sm: 'flex-start' },
          display: 'flex',
        }}
      >
        <ButtonLarge
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
