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
          //  onMouseEnter={(e) => {
          //    (e.target.style.backgroundColor = '#fff'),
          //      (e.target.style.transition = 'background-color .1s ease-in');
          //  }}
          //  onMouseLeave={(e) => {
          //    (e.target.style.backgroundColor = '#eee'),
          //      (e.target.style.transition =
          //        'background-color .8s ease-out');
          //  }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h2>{text}</h2>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
