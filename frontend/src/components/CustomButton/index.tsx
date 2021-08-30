/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  CircularProgress,
  ButtonProps,
  IconButtonProps,
} from '@material-ui/core';

interface IIconButtonProps extends IconButtonProps {
  variant: string;
}

export const CustomIconButton: React.FC<IIconButtonProps> = props => {
  const { palette } = useTheme();
  const DefaultIconButton = withStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: (props.variant === 'outlined' && '1px solid #31365299') || '',
      backgroundColor:
        (props.variant === 'filled' && palette.primary.main) || '',
    },
  })(IconButton);

  return (
    <DefaultIconButton {...props} onClick={props.onClick}>
      {props.children}
    </DefaultIconButton>
  );
};

interface IButtonProps extends ButtonProps {
  backgroundColor?: string;
  fontColor?: string;
  borderColor?: string;
  loading?: boolean;
}

export const CustomButton: React.FC<IButtonProps> = props => {
  const { palette } = useTheme();
  const DefaultButton = withStyles({
    root: {
      padding: '10px 16px',
      borderRadius: 6,
    },
    label: {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: '20px',
    },
    contained: {
      backgroundColor: props.backgroundColor || palette.primary.main,
      color: props.fontColor || palette.common.white,
      '&:hover': {
        backgroundColor: props.backgroundColor || palette.primary.main,
      },
      '&:active': {
        backgroundColor: props.backgroundColor || palette.primary.main,
      },
    },
    outlined: {
      backgroundColor: props.backgroundColor || '#ffffff00',
      border: `1px solid ${props.borderColor || palette.primary.main}`,
      color: props.fontColor || palette.text.primary,
    },
  })(Button);

  return (
    <DefaultButton {...props}>
      {props.loading ? (
        <CircularProgress size={16} color="primary" />
      ) : (
        props.children
      )}
    </DefaultButton>
  );
};
