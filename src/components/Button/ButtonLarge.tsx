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
        gap: 10,
        width: 335,
        padding: '13px 16px',
        fontSize: '14px',
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
