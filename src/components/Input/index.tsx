import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';

const Input = ({ sx, ...props }: TextFieldProps) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      sx={[
        {
          height: 60,
          '& .MuiOutlinedInput-root': {
            color: 'common.white',
            '& fieldset': {
              borderColor: 'grey.300',
              borderWidth: '3px',
            },
            '&:hover fieldset': {
              borderColor: 'grey.300',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary.main',
            },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};

export default Input;
