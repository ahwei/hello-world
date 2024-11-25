import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import type { ReactNode } from 'react';

interface Props extends ButtonProps {
  children: ReactNode;
}

const ButtonLarge = ({ children, ...props }: Props) => {
  return (
    <Button
      {...props}
      color="primary"
      variant="contained"
      sx={(theme) => ({
        borderRadius: '4px',
        width: 335,
        padding: '8px',
        fontSize: '12px',
        fontWeight: '1000',
        '&:hover': {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          borderWidth: 1,
          borderStyle: 'solid',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
        },
      })}
      disableRipple
    >
      {children}
    </Button>
  );
};

export default ButtonLarge;
