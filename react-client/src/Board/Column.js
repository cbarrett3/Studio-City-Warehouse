import React, { useState } from 'react';
import Item from './Item';
import { Droppable } from 'react-beautiful-dnd';
import { PlusCircleOutlined } from '@ant-design/icons';

const Column = ({ col: { list, id } }) => {
  const [addNew, setAddNew] = useState(false);

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
            // backgroundColor: '#080808',
            backgroundColor: '#111111',
            borderRadius: '3px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
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
            <PlusCircleOutlined
              style={{ color: '#B99A5B' }}
              onClick={(e) => {
                setAddNew(true);
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '.6';
                e.target.style.cursor = 'pointer';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#B99A5B';
                e.target.style.opacity = '1';
              }}
            ></PlusCircleOutlined>
          </div>
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
