import styled from 'styled-components';
import theme from '../../theme';

const { palette } = theme;

type ExpandProps = {
  variant: string;
  maxWidth?: string;
};

export const Container = styled.div<ExpandProps>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'expand' ? 'row' : 'column')};
  width: ${({ variant }) =>
    variant === 'expand' ? '100%' : 'calc((55vw - 80px) / 3)'};
  max-width: ${({ variant, maxWidth }) =>
    variant === 'expand'
      ? '100%'
      : `calc((${maxWidth || '810px'} - 80px) / 3)`};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & .MuiTypography-root {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & hr {
    margin: 10px 0;
    width: 32px;
    border-top: 1px solid ${palette.divider};
  }

  & div.footerCard {
    display: flex;
    justify-content: space-between;
  }
`;
