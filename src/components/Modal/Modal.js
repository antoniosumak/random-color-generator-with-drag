import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styled components
import {
  Overlay,
  Wrapper,
  Container,
  TitleContainer,
  Title,
  CloseButton,
  ColorInput,
} from './ModalStyles';

import { Button } from '../../lib/styles/generalStyles';

const Modal = ({ modalOpen, title }) => {
  const formik = useFormik({
    initialValues: {
      new_color: '',
    },

    validationSchema: Yup.object({
      new_color: Yup.string()
        .required('You must enter hex value for the color')
        .min(3, 'Minimal 3 characters')
        .max(6, 'Maximal 6 characters'),
    }),
  });

  return (
    <Overlay>
      <Wrapper>
        <Container>
          <TitleContainer>
            {title && <Title>{title}</Title>}
            <CloseButton onClick={() => modalOpen(false)}></CloseButton>
          </TitleContainer>
          <ColorInput />
          <Button>Save color</Button>
        </Container>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;
