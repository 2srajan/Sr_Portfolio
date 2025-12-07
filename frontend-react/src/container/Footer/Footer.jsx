import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 👈 for animation
import { images } from '../../constents';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // ✅ Frontend validation
    if (!formData.username || !formData.email || !formData.message) {
      setError('⚠️ All fields are required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('📧 Please enter a valid email address!');
      return;
    }

    setError('');
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setSuccess('✅ Message sent successfully!');
        setFormData({ username: '', email: '', message: '' });

        // Auto hide success popup
        setTimeout(() => setSuccess(''), 2000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError('❌ Failed to send message. Please try again.');
      });
  };

  // ⏰ Automatically remove error after 2 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:srajansinghuu@gmail.com" className="p-text">
            srajansinghuu@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+919140754909" className="p-text">
            +91 9140754909
          </a>
        </div>
      </div>

      {/* 🔔 Animated error popup */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="error-popup"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              x: [0, -10, 10, -10, 10, 0], // shake effect
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {success && (
            <motion.div
              className="success-popup"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {success}
            </motion.div>
          )}

          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
            disabled={loading}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
