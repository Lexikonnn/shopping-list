import './EntitiesRender.css';

type Entity = {
  id: string;
  name: string;
};

type EntitiesRenderProps = {
  entities: Entity[];
  EntryComponent: React.FC<{ id: string; name: string; onEntryClick?: (id: string) => void }>;
  onEntryClick?: (id: string) => void;
};

const EntitiesRender: React.FC<EntitiesRenderProps> = ({ entities, EntryComponent, onEntryClick }) => {
  return (
    <div className='products-wrapper'>
      {entities.map(entity => (
        <EntryComponent key={entity.id} {...entity} onEntryClick={onEntryClick} />
      ))}
    </div>
  );
};

export default EntitiesRender;
