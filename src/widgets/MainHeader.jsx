import './styles/MainHeader.scss'
import logo from '../assets/testMaperLogo.svg'
import HeaderButton from '../components/HeaderButton';
import Spacer from '../components/Spacer';

const MainHeader = () => { 
    return(
        <div className='mainHeaderContent'>
            <img src={logo} alt="maperLogo" className='maperLogo' />
            <Spacer />
            <h3 className='chtoto'>Чтото</h3>
            <h3 className='chtoto'>Чтото</h3>
            <h3 className='chtoto'>Чтото</h3>
            <HeaderButton text={'Войти'} /> 
        </div>
    );
};

export default MainHeader