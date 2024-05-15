import React from 'react';
import CardComp from '../CardComp/CardComp';
import "./ListComp.css"

const ListComp = ({ todo, done, toggleDone, onRemove }) => {
  return (
    <React.Fragment>
      <div className='workingList'>
        <h1 className='workingTitle'>Working...🔥</h1>
        <div className='cardFlex'>
          <div className='gridContainer'>
            {todo.map((cards) => (
              <CardComp 
                key={cards.id} 
                id={cards.id}
                title={cards.title} 
                content={cards.cont}
                onRemove={onRemove}
                toggleDone={() => toggleDone(cards.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='doneList'>
        <h1 className='doneTitle'>Done ✅</h1>
        <div className='cardFlex2'>
          <div className='gridContainer2'>
            {done.map((cards) => (
              <CardComp 
                key={cards.id} 
                id={cards.id}
                title={cards.title} 
                content={cards.cont}
                onRemove={onRemove}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListComp;
