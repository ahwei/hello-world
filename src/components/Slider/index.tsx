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

const CustomSlider = ({ ...props }: SliderProps) => {
  return (
    <StyledSlider
      defaultValue={2}
      step={1}
      min={1}
      max={6}
      valueLabelDisplay="off"
      marks={marks}
      sx={{ color: 'common.white' }}
      {...props}
    />
  );
};

export default CustomSlider;
