import Checkbox from '../common/checkbox/Checkbox';
import Btn from '../common/button/Btn';
import IconBin from '../../assets/ico-bin.svg';
import InputField from '../common/inputField/InputField';
import './ProductEntry.css';

type ProductEntryProps = {
  id: string;
  name: string;
  isChecked: boolean;
  onCheck: () => void;
  isEditModeProduct: boolean;
};

const ProductEntry: React.FC<ProductEntryProps> = ({ id, name, isChecked, onCheck, isEditModeProduct }) => {

  return (
    <div className='product-wrapper'>
      {isEditModeProduct ? <img className='bin-icon' src={IconBin} alt='bin' /> : <Checkbox isChecked={isChecked} onCheck={onCheck} />}
      { isEditModeProduct ? <InputField placeholder='Name' value={ name } type='text' />  : <h6 className='content-text'>{name}</h6>}
    </div>
  );
};

export default ProductEntry;
