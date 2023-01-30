import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Item = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div
          style={{
            backgroundColor: '#eee',
            borderRadius: 4,
            padding: '4px 8px',
            transition: 'background-color .8s ease-out',
            marginTop: 8,
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h2
            style={{
              color: 'whitesmoke',
              backgroundColor: '#101010',
              borderRadius: '3px',
              padding: '15px',
            }}
            onMouseEnter={(e) => {
              //   e.target.style.backgroundColor = '#3bf';
              e.target.style.boxShadow = '-2px 2px 10px 2px #3bf';
              e.target.style.opacity = '.9';
            }}
            onMouseLeave={(e) => {
              //   e.target.style.backgroundColor = '#B99A5B';
              e.target.style.opacity = '1';
              e.target.style.boxShadow = 'none';
            }}
          >
            {text}
          </h2>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
