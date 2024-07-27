import './CardLayout.css'

type TypeCard = {
    title: string;
    top: React.ComponentType;
    center: React.ComponentType;
    bottom: React.ComponentType;
}

const CardLayout: React.FC<TypeCard> = ({ title, top: Top, center: Center, bottom: Bottom }) => {
    return (
        <div className="card-container">
            <div className="upper-wrapper">
            <h4 className='card-title'>{ title }</h4>
                <Top />
            </div>
            <div className="center-wrapper">
                <Center />
            </div>
            <div className="bottom-wrapper">
                <Bottom />
            </div>
        </div>
    );
}

export default CardLayout;