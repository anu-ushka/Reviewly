import React, { useEffect, useState } from 'react';
import './FeaturedReviews.css';

function FeaturedReviews() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setSelectedProduct(data[0]);
        const initialRatings = {};
        const initialReviews = {};
        data.forEach(product => {
          initialRatings[product.id] = [];
          initialReviews[product.id] = [];
        });
        setRatings(initialRatings);
        setReviews(initialReviews);
      });
  }, []);

  const truncateDesc = (desc) => {
    if (!desc) return '';
    return desc.length > 50 ? desc.substring(0, 50) + '...' : desc;
  };

  const handleReviewSubmit = () => {
    if (selectedProduct && newRating > 0 && newReview.trim() !== '') {
      const pid = selectedProduct.id;
      setRatings(prev => ({
        ...prev,
        [pid]: [...prev[pid], newRating]
      }));
      setReviews(prev => ({
        ...prev,
        [pid]: [...prev[pid], newReview]
      }));
      setNewReview('');
      setNewRating(0);
      setHoverRating(0);
    }
  };

  const calculateAvgRating = (pid) => {
    const allRatings = ratings[pid] || [];
    if (allRatings.length === 0) return null;
    const total = allRatings.reduce((a, b) => a + b, 0);
    return (total / allRatings.length).toFixed(1);
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
            <h3 className="review-title">{product.title.split(' ').slice(0, 7).join(' ')}{product.title.split(' ').length > 10 ? '...' : ''} j</h3>

            <p className="review-snippet">{truncateDesc(product.description)}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="review-detail">
          <div className="review-detail-text">
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Average Rating:</strong>{' '}
              {calculateAvgRating(selectedProduct.id)
                ? `${calculateAvgRating(selectedProduct.id)} / 5`
                : 'No ratings yet'}
            </p>

            <div className="review-input">
              <textarea
                placeholder="Write your review..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />

              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= (hoverRating || newRating) ? 'filled' : ''}`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setNewRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <button onClick={handleReviewSubmit}>Submit</button>
            </div>

            {reviews[selectedProduct.id]?.length > 0 && (
              <div className="user-reviews">
                <h4>User Reviews:</h4>
                <ul>
                  {reviews[selectedProduct.id].map((review, index) => (
                    <li key={index}>“{review}”</li>
                  ))}
                </ul>
              </div>
            )}
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
