import styled from 'styled-components';
import { colors, breakpoints } from './theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding-top: 24px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  background-color: ${colors.orange};
  color: white;
  border: 1px solid ${colors.orange};
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${colors.orange};
    border: 1px solid ${colors.orange};
    background-color: ${colors.white};
    cursor: pointer;
  }
  @media screen and (${breakpoints.tablet}) {
    width: 250px;
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  list-style: none;
  max-height: 80vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.li`
  background-color: ${(props) => `#${props.color}`};
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorValue = styled.p``;
