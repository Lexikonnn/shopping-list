import './Btn.css';

type TypeBtn = {
    content: string | null;
    type: string;
    onClick: () => void;
}

const Btn: React.FC<TypeBtn> = (props) => {

    const btnClass = `btn ${props.type === 'green' ? 'btn-green' : props.type === 'outline' ? 'btn-outline' : props.type === 'red' ? 'btn-red' : 'btn-none'}`;


    return ( 
        <button className= { btnClass } onClick={ props.onClick }>{ props.content }</button>
     );
}
 
export default Btn;