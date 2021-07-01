import styled from 'styled-components';
import { colors } from '../../lib/styles/theme';
export const List = styled.ul`
  margin-top: 16px;
  list-style: none;
  max-height: 70vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.li`
  background-color: ${(props) => `#${props.color}`};
  padding: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

export const ColorValue = styled.p`
  font-weight: bold;
  padding: 10px;
  color: ${colors.white};
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
`;

export const ColorNameWrapper = styled.div`
  display: flex;
  padding: 10px;
  color: ${colors.white};
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
`;

export const ColorName = styled.p`
  padding: 0px 3px;
  font-weight: bold;
`;
