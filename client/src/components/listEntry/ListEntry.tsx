import './ListEntry.css';
import Btn from '../common/button/Btn';

type ListEntryProps = {
  id: number;
  name: string;
  isCompleted?: boolean;
  onEntryClick?: (listId: number) => void;
  isEditModeList: boolean;
};

const ListEntry: React.FC<ListEntryProps> = ({ id, name, isCompleted, onEntryClick, isEditModeList }) => {

  const handleClick = () => {
    if (onEntryClick) {
      onEntryClick(id);
    }
  };

  return (
    <div className={`list-container ${isCompleted ? 'completed' : ''}`}>
      <div className='list-wrapper'>
        <h4 className='card-title'>{name}</h4>
      </div>
      <div className='list-wrapper'>
      <Btn
          content={ isEditModeList ? 'Rename' : null }
          type={ isEditModeList ? 'green' : 'none' }
          onClick={ ()=>{} }
        />
        <Btn
          content={ isCompleted === true ? 'Completed' : isEditModeList === true ? 'Delete' : 'View' }
          type={ isCompleted === true ? 'outline' : isEditModeList === true ? 'red' : 'green' }
          onClick={ isEditModeList ? () => {} : handleClick }
        />
      </div>
    </div>
  );
};

export default ListEntry;
