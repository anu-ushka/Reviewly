import React, { useEffect, useState } from 'react';
import './FeaturedCarousel.css';

const FeaturedCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="carousel-section">
      <h2 className="carousel-heading">Featured Products</h2>
      <div className="carousel-container">
        {products.map(product => (
          <div className="carousel-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 100)}...</p>
            <p><strong>${product.price}</strong></p>
            <a href={`https://fakestoreapi.com/products/${product.id}`} className="carousel-btn">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
