import './styles/GetStartedWithMaper.scss'
import Button from '../../components/Button'


const GetStartedWithMaper = () => {
    return(
        <div className="GetStartedWithMaper">
            <h1 className='GetStartedWithMaperTitle'>Начните работу с Maper уже сегодня</h1>
            <div className="GetStartedWithMaperInputBlock">
            <input type="text" placeholder="Email" className="GetStartedWithMaperInput"></input> 
            <Button text={"Регестрируйтесь!"} />
            </div>
        </div>
    );
};

export default GetStartedWithMaper