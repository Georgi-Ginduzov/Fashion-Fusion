import PropTypes from 'prop-types';
import './StoreItem.css';

// StoreItem component to display individual product data
const StoreItem = ({ image, title, price }) => {
  return (
    <div className="store-item">
      <img src={image} alt={title} className="store-item-image" />
      <h2 className="store-item-title">{title}</h2>
      <p className="store-item-price">${price}</p>
    </div>
  );
};

// Prop types to ensure correct data type for props
StoreItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default StoreItem;
