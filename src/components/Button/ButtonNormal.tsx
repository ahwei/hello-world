import type { ButtonProps, SxProps, Theme } from '@mui/material';
import { Button } from '@mui/material';
import type { ReactNode } from 'react';

interface Props extends ButtonProps {
  children: ReactNode;
  variant?: 'contained' | 'outlined';
}

const ContainedHoverStyle = (theme: Theme): SxProps => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  borderWidth: 1,
  borderStyle: 'solid',
});

const OutlinedHoverStyle = (theme: Theme): SxProps => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  borderColor: theme.palette.common.black,
  borderWidth: 1,
  borderStyle: 'solid',
});

const ButtonNormal = ({
  children,
  variant = 'contained',
  sx = [],
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      color="primary"
      variant={variant}
      sx={[
        (theme) => ({
          borderRadius: '20px',
          gap: 10,
          padding: '8px 10px',
          fontSize: '12px',
          '&:hover': {
            ...(variant === 'contained' ? ContainedHoverStyle(theme) : {}),
            ...(variant === 'outlined' ? OutlinedHoverStyle(theme) : {}),
          },
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      disableRipple
    >
      {children}
    </Button>
  );
};

export default ButtonNormal;
