import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ColorsContext } from '../../context/ColorsContext';

// Stlyes
import {
  Overlay,
  Wrapper,
  Container,
  TitleContainer,
  Title,
  CloseButton,
  Form,
  FormRow,
  Label,
  InputError,
  ColorInput,
} from './ModalStyles';
import { Button } from '../../lib/styles/generalStyles';

const Modal = ({ modalOpen, title }) => {
  const { colors, setColors } = useContext(ColorsContext);
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
    onSubmit: (value) => {
      setColors([...colors, value]);
      modalOpen(false);
    },
  });

  return (
    <Overlay>
      <Wrapper>
        <Container>
          <TitleContainer>
            {title && <Title>{title}</Title>}
            <CloseButton onClick={() => modalOpen(false)}></CloseButton>
          </TitleContainer>
          <Form onSubmit={formik.handleSubmit}>
            <FormRow>
              <Label htmlFor="hex">Hex color value</Label>
              <ColorInput
                id="hex"
                type="text"
                {...formik.getFieldProps('new_color')}
              />
              {formik.touched.new_color && formik.errors.new_color ? (
                <InputError>{formik.errors.new_color}</InputError>
              ) : null}
            </FormRow>
            <Button>Save color</Button>
          </Form>
        </Container>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;
