import React, { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  List as ListWrapper,
  ListItem,
  ColorValue,
  ColorNameWrapper,
  ColorName,
} from './ListStyles';
import { Grid } from '../../lib/styles/generalStyles';

import { ColorsContext } from '../../context/ColorsContext';

const List = () => {
  const { colors, setColors } = useContext(ColorsContext);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(colors);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setColors(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="colors">
        {(provided) => (
          <ListWrapper
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
                        key={index}
                        ref={provided.innerRef}
                        color={data.new_color}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ColorValue>{`#${data.new_color}`}</ColorValue>
                        <ColorNameWrapper>
                          {data.colors &&
                            data.colors[0].tags.map((values) => (
                              <ColorName>{values.name}</ColorName>
                            ))}
                        </ColorNameWrapper>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </Grid>
          </ListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
