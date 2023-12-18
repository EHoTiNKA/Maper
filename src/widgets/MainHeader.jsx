import './styles/MainHeader.scss'
import { Link } from "react-router-dom"
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
            <Link to={"/login"}><HeaderButton text={'Войти'} /></Link>
        </div>
    );
};

export default MainHeader