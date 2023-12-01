import './styles/MainPage.scss'
import MainHeader from'./MainHeader'
import MainBody from'./MainBody'
import MainFooter from'./MainFooter'

const MainPage = () => {
    return(
        <div className='pageContent'>
            <MainHeader/>
            <MainBody/>
            <MainFooter/>
        </div>
    );
};

export default MainPage