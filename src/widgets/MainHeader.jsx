import './styles/MainHeader.scss'
import logo from '../assets/testMaperLogo.svg'
import WhiteButton from '../components/WhiteButton';
import Spacer from '../components/Spacer';

const MainHeader = () => {
    return(
        <div className='mainHeaderContent'>
            <img src={logo} alt="maperLogo" className='maperLogo' />
            <Spacer></Spacer>
            <h3 className='chtoto'>Чтото</h3>
            <h3 className='chtoto'>Чтото</h3>
            <h3 className='chtoto'>Чтото</h3>
            <button className='headerWhiteButton'><WhiteButton text={'Войти'}></WhiteButton></button>
        </div>
    );
};

export default MainHeader