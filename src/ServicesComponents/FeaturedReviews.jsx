import React, { useEffect, useState } from 'react';
import './FeaturedReviews.css';

function FeaturedReviews() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setSelectedProduct(data[0]);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const truncateDesc = (desc) => {
    if (!desc) return '';
    return desc.length > 50 ? desc.substring(0, 50) + '...' : desc;
  };

  return (
    <section className="featured-reviews-section">
      <h2>Top Reviewed Products</h2>
      <div className="reviews-carousel">
        {products.map(product => (
          <div
            key={product.id}
            className={`review-card ${selectedProduct?.id === product.id ? 'selected' : ''}`}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.title} className="review-image" />
            <h3 className="review-title">{product.title}</h3>
            <p className="review-snippet">{truncateDesc(product.description)}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="review-detail">
          <div className="review-detail-text">
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
            <p><strong>Rating:</strong> {selectedProduct.rating?.rate} / 5 ({selectedProduct.rating?.count} reviews)</p>
          </div>
          <div className="review-detail-image">
            <img src={selectedProduct.image} alt={selectedProduct.title} />
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedReviews;
