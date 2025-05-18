import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: "How do I trust these reviews?",
    answer: "All our reviews go through moderation and come from verified users."
  },
  {
    question: "Can I write my own review?",
    answer: "Yes! Just sign up and start reviewing your favorite products."
  },
  {
    question: "Are the reviews paid/sponsored?",
    answer: "No. We are 100% independent and do not accept paid promotions."
  },
  {
    question: "How are products selected for the homepage?",
    answer: "Our editors curate the most helpful and trending reviews."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-row">
                <span className="faq-question">{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? '–' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
