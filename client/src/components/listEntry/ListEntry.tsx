import './ListEntry.css';
import Btn from '../common/button/Btn';
import InputField from '../common/inputField/InputField';

type ListEntryProps = {
  id: string;
  name: string;
  isCompleted: boolean;
  onEntryClick?: (listId: string) => void;
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
        {isEditModeList ? <InputField placeholder='Name' value={ name } type='text'/> : <h4 className='card-title'>{name}</h4>}
      </div>
      <div className='list-wrapper'>
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
