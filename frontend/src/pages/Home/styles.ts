import styled from 'styled-components';
import theme from '../../theme';

const { palette } = theme;

export const Container = styled.div`
  padding: 24px;
  width: 55vw;
  max-width: 810px;

  & section {
    margin-bottom: 64px;
  }

  & .header {
    margin: 50px 0px 32px;
  }

  & ul.filtersGroup {
    display: flex;
    margin: 24px 0 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0px 4px;
      border: 1px solid ${palette.divider};
      border-radius: 20px;
      padding: 8px 16px;
    }
  }

  & .sectionHeader {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  & .cardWrapper {
    overflow: hidden;
    display: grid;
    gap: 16px;
    grid-template-rows: repeat(auto);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    scroll-snap-type: x mandatory;
    max-width: 55vw;
  }
`;
