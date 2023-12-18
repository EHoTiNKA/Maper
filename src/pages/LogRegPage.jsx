import './styles/LogRegPage.scss'
import testLogo from '../assets/testMaperLogo.svg'


const LogRegPage = () => {
    return(
        <div className="LogRegPage">
            <div className="RegMenu">
                <img src={testLogo} alt="testLogo" />
                <h5 className='RegMenuTitle'>Зарегестрируйтесь, чтобы продолжить</h5>
                <input type="text" placeholder='email' className='RegMenuInput'/>
                <p className='RegMenuParagr'>Регистрируясь, я соглашаюсь с Условиями использования продуктов Cloud и принимаю Политику конфиденциальности Atlassian.</p>
                <button className='RegMenuButton'>Зарегестрироваться</button>
                <p className='RegMenuParagr2'>Или продолжить с помощью:</p> 
                <div className="RegWithGoogle">
                    <img src="" alt="googleLogo" />
                    <p className='RegWithGoogleParagr'></p>
                </div>
                <p className='RegMenuParagr3'>Уже есть аккаунт? Войти</p>
                <img src={testLogo} alt="testLogo" />
                <p className='RegMenuParagr3'>Политки соглашения капча и т.д.</p>

            </div>
        </div>
    );
};

export default LogRegPage