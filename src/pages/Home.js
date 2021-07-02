import React, { useContext, useState } from 'react';

//Components
import Section from '../components/Section/Section';
import List from '../components/List/List';
import Modal from '../components/Modal/Modal';

//Styles
import { Button, ButtonRows, SearchBar } from '../lib/styles/generalStyles';

//Api and context
import { getRandomColor } from '../api/getRandomColor';
import { ColorsContext } from '../context/ColorsContext';

const Home = () => {
  const { colors, setColors } = useContext(ColorsContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('Click for color');

  //Timestamp for api request
  let ts = Date.now();

  //API request function
  const getColors = () => {
    getRandomColor(ts).then((data) => setColors([...colors, data]));
  };

  const handleSearch = (values) => {
    setSearchValue(values.target.value);
  };

  return (
    <Section>
      <ButtonRows>
        <Button onClick={() => getColors()}>
          {colors.length !== 0
            ? `#${colors[colors.length - 1].new_color}`
            : 'Click for color'}
        </Button>
        <SearchBar
          type="text"
          onChange={(values) => handleSearch(values)}
          placeholder={'Input your text...'}
        />
        <Button onClick={() => setModalOpen(true)}>
          {searchValue === '' ? 'Add color' : searchValue}
        </Button>
      </ButtonRows>
      <List />
      {modalOpen && <Modal modalOpen={setModalOpen} title="Add color"></Modal>}
    </Section>
  );
};

export default Home;
