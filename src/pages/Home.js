import React, { useContext, useState } from 'react';
import Section from '../components/Section/Section';
import { Button, ButtonRows, SearchBar } from '../lib/styles/generalStyles';
import { getRandomColor } from '../api/getRandomColor';
import List from '../components/List/List';
import { ColorsContext } from '../context/ColorsContext';
import Modal from '../components/Modal/Modal';

const Home = () => {
  const { colors, setColors } = useContext(ColorsContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('Click for color');
  let ts = Date.now();

  const getColors = () => {
    getRandomColor(ts).then((data) => setColors([...colors, data]));
  };

  const handleSearch = (values) => {
    setSearchValue(values.target.value);
  };

  console.log(searchValue);
  return (
    <Section>
      <ButtonRows>
        <Button onClick={() => getColors()}>
          {searchValue === ''
            ? colors[colors.length - 1].new_color
            : searchValue}
        </Button>
        <SearchBar
          type="text"
          onChange={(values) => handleSearch(values)}
          placeholder={'Input your text...'}
        />
        <Button onClick={() => setModalOpen(true)}>Add color</Button>
      </ButtonRows>
      <List />
      {modalOpen && <Modal modalOpen={setModalOpen} title="Add color"></Modal>}
    </Section>
  );
};

export default Home;
