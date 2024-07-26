import { useEffect, useState } from "react";
import axios from "axios";
import StoreItem from "../storeItem/StoreItem";

// BestSeller component fetching data from the API and rendering StoreItem components
const BestSeller = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get('https://api.escuelajs.co/api/v1/categories/1/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);
  
    console.log(products[8].images[0]);

    return (
      <div className="best-seller">
        <h1>Best Seller</h1>
        <div className="product-grid">
          {products.map(product => (
            <StoreItem 
              key={product.id} 
              image={product.images[0]} // Adjusted path to the image URL
              title={product.title} 
              price={product.price} 
            />
          ))
        }
        </div>
      </div>
    );
  };

export default BestSeller;
