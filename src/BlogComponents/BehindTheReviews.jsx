import React from 'react';
import './BehindTheReviews.css';
import aiPoweredImg from '../assets/blogsImages/ai-powered-img.png';
import topReviewerImg from '../assets/blogsImages/top-reviewer-img.png';
import honestFeedbackImg from '../assets/blogsImages/honest-feedback-img.png';


const blogPosts = [
  {
    title: "How We Ensure Honest Feedback",
    description: "Discover the rigorous verification system that powers our product reviews.",
    author: "Admin Team",
    image: honestFeedbackImg
  },
  {
    title: "Meet the Top Reviewer of the Month",
    description: "We spotlight the most trusted and active contributor from our community.",
    author: "Community Manager",
    image: topReviewerImg
  },
  {
    title: "Our AI-Powered Rating System Explained",
    description: "A behind-the-scenes look at how AI helps ensure fairness in reviews.",
    author: "Tech Lead",
    image: aiPoweredImg
  }
];

const BehindTheReviews = () => {
  return (
    <section className="behind-section">
      <h2 className="behind-title">Behind the Reviews</h2>
      <div className="carousel-container">
        {blogPosts.map((post, index) => (
          <div className="carousel-card" key={index}>
            <div className="card-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span className="author">By {post.author}</span>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BehindTheReviews;
