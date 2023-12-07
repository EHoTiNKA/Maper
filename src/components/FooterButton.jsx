import './styles/FooterButton.scss'


const FooterButton = ({ title, descirtion }) => {
    return(
        <div className="FooterButton">
            <h2 className='FooterButtonTitle'>{title}</h2>
            <p className='FooterButtonDesc'>{descirtion}</p>
        </div>
    );
};

export default FooterButton