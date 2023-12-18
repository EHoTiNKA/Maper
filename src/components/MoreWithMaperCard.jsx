import './styles/MoreWithMaperCard.scss'


const MoreWithMaperCard = ({ img, title, desc, buttonText }) => {
    return(
        <div className="MoreWithMaperCard">
            <img src={img} alt="img" />
            <h2 className='MoreWithMaperCardTitle'>{title}</h2>
            <p className='MoreWithMaperCardDesc'>{desc}</p> 
            <button className='MoreWithMaperCardButton'>{buttonText}</button>
        </div>
    );
};

export default MoreWithMaperCard