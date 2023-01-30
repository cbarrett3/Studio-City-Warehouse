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
            padding: '4px 8px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#080808',
            borderRadius: '3px',
          }}
        >
          <h2
            style={{
              color: '#B99A5B',
              fontSize: '.85rem',
            }}
          >
            {id}
          </h2>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              borderRadius: '4px',
              padding: '2px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              marginTop: '4px',
              fontSize: '.5rem',
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
