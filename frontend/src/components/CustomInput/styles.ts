import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import theme from '../../theme';

const { palette } = theme;

export const Input = styled(TextField)`
  width: 100%;
  & .MuiFilledInput-root {
    width: 100%;
    background-color: ${palette.background.default};
  }
`;
