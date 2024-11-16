import ButtonLarge from '@/components/Button/ButtonLarge';
import ButtonNormal from '@/components/Button/ButtonNormal';
import Input from '@/components/Input';
import Slider from '@/components/Slider';
import { Box } from '@mui/material';
const Home = () => {
  return (
    <Box flexDirection="column" display="flex" gap={4} sx={{ width: '100%' }}>
      <Input sx={{ width: '100%' }} placeholder="keyword" />
      <Slider />
      <ButtonLarge>test</ButtonLarge>
      <ButtonNormal sx={{ width: 100 }}>test</ButtonNormal>
      <ButtonNormal variant="outlined" sx={{ width: 100 }}>
        test
      </ButtonNormal>
    </Box>
  );
};

export default Home;
