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
  font-weight: 400;
  font-size: 14px;

  &:hover {
    color: ${colors.orange};
    border: 1px solid ${colors.orange};
    background-color: ${colors.white};
    cursor: pointer;
  }
  @media screen and (${breakpoints.tablet}) {
    width: 250px;
  }
`;

export const ButtonRows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin: 16px 0px;
  border-radius: 8px;
  border: 1px solid ${colors.black};

  &:focus {
    border: 1px solid ${colors.orange};
    outline: none;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 400px;
    margin: 0px 16px;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
