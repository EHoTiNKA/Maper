import './styles/ProductivityPowerhouseCard.scss'

const ProductivityPowerhouseCard = ({ title, desciption }) => {
    return(
        <div className="ProductivityPowerhouseCard">
            <h2>{title}</h2>
            <p>{desciption}</p>
        </div>

    );
};

export default ProductivityPowerhouseCard