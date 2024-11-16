import type { SliderProps } from '@mui/material';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)({
  color: 'grey.300',
  '& .MuiSlider-track': {
    background: 'linear-gradient(to right,#FF5C01, #FFD25F )',
    border: 'none',
    height: 8,
  },
  '& .MuiSlider-markLabel': {
    color: 'white',
  },
  '& .MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-valueLabel': {
    display: 'none', // 隱藏 hover 時的數值標籤
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

const CustomSlider = ({ ...props }: SliderProps) => {
  return (
    <StyledSlider
      step={1}
      min={1}
      max={6}
      valueLabelDisplay="off"
      marks={[]}
      sx={{ color: 'common.white' }}
      {...props}
    />
  );
};

export default CustomSlider;
