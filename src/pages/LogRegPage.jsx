import './styles/LogRegPage.scss'
import testLogo from '../assets/testMaperLogo.svg'
import googleLogo from '../assets/googleLogo.png'


const LogRegPage = () => {
    return(
        <div className="LogRegPage">
            <div className="RegMenu">
                <img src={testLogo} alt="testLogo" className='regMenuMaperLogo' />
                <h5 className='RegMenuTitle'>Зарегестрируйтесь, чтобы продолжить</h5>
                <input type="text" placeholder='email' className='RegMenuInput'/>
                <p className='RegMenuParagr'>Регистрируясь, я соглашаюсь с Условиями использования продуктов Cloud и принимаю Политику конфиденциальности Atlassian.</p>
                <button className='RegMenuButton'>Зарегестрироваться</button>
                <p className='RegMenuParagr2'>Или продолжить с помощью:</p> 
                <div className="RegWithGoogle">
                    <img src={googleLogo} alt="googleLogo" className='regMenuGoogleLogo' />
                    <p className='RegWithGoogleParagr'>Google</p>
                </div>
                <p className='RegMenuParagr3'>Уже есть аккаунт? Войти</p>
                {/* <img src={testLogo} alt="testLogo" className='regMenuMaperLogo' /> */}
                <p className='RegMenuParagr4'>Политки соглашения капча и т.д.</p> 

            </div>
        </div>
    );
};

export default LogRegPage