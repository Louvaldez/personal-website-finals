import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const MAX_COMMENT_LENGTH = 200; // Define maximum comment length

  useEffect(() => {
    // Fetch feedbacks from Supabase on component mount
    fetchFeedbacks();

    // Set up real-time subscription
    const subscription = supabase
      .channel('public:feedbacks')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'feedbacks' 
      }, payload => {
        setFeedbacks(current => [...current, payload.new]);
      })
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const { data, error } = await supabase
        .from('feedbacks')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setFeedbacks(data || []);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      setError('Failed to load feedbacks. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('feedbacks')
        .insert([
          { 
            name: formData.name,
            email: formData.email || null,
            comment: formData.comment,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) throw error;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        comment: ''
      });
      
      // Note: We don't need to update the feedbacks state manually
      // as the real-time subscription will handle that
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <section className="section fade-in">
      <div className="container">
        <h2 className="section-title">Feedback</h2>
        
        <div className="feedback-container">
          <div className="feedback-form-container">
            <form onSubmit={handleSubmit} className="feedback-form card">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="comment">Comment * <span className="character-count">{MAX_COMMENT_LENGTH - formData.comment.length} characters remaining</span></label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  maxLength={MAX_COMMENT_LENGTH}
                  className="form-input"
                  rows="4"
                  placeholder="Enter your feedback"
                  disabled={isSubmitting}
                />
              </div>
              
              {error && <p className="error-message">{error}</p>}
              
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Posting...' : 'Post Feedback'}
              </Button>
            </form>
          </div>
          
          <div className="feedback-list">
            <h3 className="feedback-list-title">Recent Feedback</h3>
            {feedbacks.length === 0 ? (
              <p className="no-feedback">No feedback yet. Be the first to leave one!</p>
            ) : (
              <div className="feedback-items-container">
                {feedbacks.map(feedback => (
                  <div key={feedback.id} className="feedback-item card slide-in">
                    <div className="feedback-header">
                      <h4 className="feedback-name">{feedback.name}</h4>
                      <span className="feedback-date">{formatDate(feedback.created_at)}</span>
                    </div>
                    {feedback.email && (
                      <p className="feedback-email">{feedback.email}</p>
                    )}
                    <p className="feedback-comment">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback; 