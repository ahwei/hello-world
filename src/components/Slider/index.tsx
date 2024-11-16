import type { SliderProps } from '@mui/material';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

interface Props extends SliderProps {
  value: number;
}

const StyledSlider = styled(Slider)({
  '& .MuiSlider-track': {
    background: 'linear-gradient(to right,#FF5C01, #FFD25F )',
    border: 'none',
    height: 8,
  },
  '& .MuiSlider-markLabel': {
    color: 'grey',
  },
  '& .MuiSlider-markLabelActive': { color: 'white' },
  '& .MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-thumb': {
    color: '#FFD25F',
    width: 20,
    height: 20,
    '&::after': {
      position: 'absolute',
      content: '""',
      borderRadius: '50%',
      width: 10,
      height: 10,
      backgroundColor: '#000',
    },
  },
});

const CustomSlider = ({ value, ...props }: Props) => {
  return (
    <StyledSlider
      step={1}
      min={1}
      max={6}
      value={value}
      valueLabelDisplay="off"
      sx={{
        color: 'common.white',
        '& .MuiSlider-markLabel': {
          color: 'grey',
        },

        [`& .MuiSlider-markLabel[data-index="${value - 1}"]`]: {
          color: 'white',
        },
      }}
      {...props}
    />
  );
};

export default CustomSlider;
