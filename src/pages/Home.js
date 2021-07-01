import React, { useState } from 'react';
import Section from '../components/Section/Section';
import {
  Button,
  List,
  ListItem,
  Grid,
  ColorValue,
} from '../lib/styles/generalStyles';
import { getRandomColor } from '../api/getRandomColor';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Home = () => {
  const [colors, setColors] = useState([]);
  let ts = Date.now();

  const getColors = () => {
    getRandomColor(ts).then((data) => setColors([...colors, data]));
  };

  console.log(colors);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(colors);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setColors(items);
  }

  return (
    <Section>
      <Button onClick={() => getColors()}>Click to get color</Button>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="colors">
          {(provided) => (
            <List
              className="colors"
              {...provided.droppableProps}
              {...provided.dragHandle}
              ref={provided.innerRef}
            >
              <Grid>
                {colors &&
                  colors.map((data, index) => (
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <ListItem
                          ref={provided.innerRef}
                          color={data.new_color}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ColorValue>{data.new_color}</ColorValue>
                        </ListItem>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </Grid>
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Section>
  );
};

export default Home;
