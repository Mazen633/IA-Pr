import React, { useState } from 'react';
import axios from 'axios';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmitReview = async () => {
    if (rating === 0 || comment.trim() === '') {
      setSubmissionStatus('Please provide both rating and comment.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/reviews', {
        rating,
        comment,
      });
      console.log('Submitted review response:', response.data);
     
      setSubmissionStatus('Review submitted successfully!');
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Review submission failed:', error);
      setSubmissionStatus('Failed to submit review.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Leave a Review</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-6">
        <div className="text-center">
          <p className="text-lg font-medium mb-2">Rate your experience</p>
          <div className="flex justify-center gap-2 text-yellow-500 text-3xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingClick(star)}
                className={`cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block mb-2 font-medium text-gray-700">
            Your Comment
          </label>
          <textarea
            id="comment"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-300"
            placeholder="Write your feedback here..."
          />
        </div>

        <button
          onClick={handleSubmitReview}
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl transition"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>

        {submissionStatus && (
          <p className="text-center mt-4 text-blue-600 font-medium">{submissionStatus}</p>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
