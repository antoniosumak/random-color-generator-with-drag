import React, { useContext, useState } from 'react';
import Section from '../components/Section/Section';
import { Button, ButtonRows } from '../lib/styles/generalStyles';
import { getRandomColor } from '../api/getRandomColor';
import List from '../components/List/List';
import { ColorsContext } from '../context/ColorsContext';
import Modal from '../components/Modal/Modal';

const Home = () => {
  const { colors, setColors } = useContext(ColorsContext);
  const [modalOpen, setModalOpen] = useState(false);
  let ts = Date.now();

  const getColors = () => {
    getRandomColor(ts).then((data) => setColors([...colors, data]));
  };

  console.log(colors);

  return (
    <Section>
      <ButtonRows>
        <Button onClick={() => getColors()}>
          {colors.length !== 0
            ? colors[colors.length - 1].new_color
            : 'Click for color'}
        </Button>
        <Button onClick={() => setModalOpen(true)}>Add color</Button>
      </ButtonRows>
      <List />
      {modalOpen && <Modal modalOpen={setModalOpen} title="Add color"></Modal>}
    </Section>
  );
};

export default Home;
