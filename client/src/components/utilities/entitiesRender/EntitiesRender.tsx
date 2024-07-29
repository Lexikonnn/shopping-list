import React from 'react';
import './EntitiesRender.css';

type Entity = {
  id: number;
  name: string;
};

type EntitiesRenderProps = {
  entities: Entity[];
  EntryComponent: React.FC<{ id: number; name: string; onEntryClick?: (id: number) => void }>;
  onEntryClick?: (id: number) => void;
};

const EntitiesRender: React.FC<EntitiesRenderProps> = ({ entities, EntryComponent, onEntryClick }) => {
  return (
    <div className='products-wrapper'>
      {entities.map(entity => (
        <EntryComponent
          key={entity.id} // Ensure each child has a unique key
          id={entity.id}
          name={entity.name}
          onEntryClick={onEntryClick}
        />
      ))}
    </div>
  );
};

export default EntitiesRender;
