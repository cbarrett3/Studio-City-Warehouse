import React from 'react';
import Item from './Item';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ col: { list, id } }) => {
  console.log(list);
  console.log(id);
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          style={{
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 8,
            h2: {
              margin: 0,
              padding: '0 16px',
            },
          }}
        >
          <h2
            style={{
              color: 'gray',
            }}
          >
            {id}
          </h2>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              backgroundColor: 'lightgray',
              borderRadius: 8,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              marginTop: 8,
            }}
          >
            {list.map((text, index) => (
              <Item key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
