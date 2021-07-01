import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';
import { MdClose } from 'react-icons/md';

export const Overlay = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 100%;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  width: 95%;
  margin-top: 40px;
  background-color: white;
  border-radius: 6px;
  @media screen and (${breakpoints.mobileLarge}) {
    width: auto;
  }
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin: 16px;
  @media screen and (${breakpoints.mobileLarge}) {
    margin: 24px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  color: black;
  line-height: 100%;
`;

export const CloseButton = styled(MdClose)`
  border: none;
  background: none;
  font-size: 30px;
  font-weight: bold;
  line-height: 100%;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const ColorInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  margin-bottom: 24px;

  &:focus {
    border: 1px solid black;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 400px;
  }
`;

export const InputError = styled.p`
  font-size: 14px;
  color: red;
  margin-top: -16px;
  margin-bottom: 24px;
`;
