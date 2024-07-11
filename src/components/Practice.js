// client/src/components/Practice.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Practice.css'; // CSS file for styling

// Define flag images
import spanishFlag from '../assets/spanish-flag.png';
import koreanFlag from '../assets/korean-flag.jpg';
import frenchFlag from '../assets/french-flag.jpg';
import japaneseFlag from '../assets/japanese-flag.jpg';

const Practice = () => {
  return (
    <div className="practice-container">
      <h2 className="text-center">Practice Tests</h2>
      <div className="language-box">
        <div className="language-section" style={{ backgroundImage: `url(${spanishFlag})` }}>
          <h3>Spanish</h3>
          <div className="button-group">
            <a href="/pdfs/spanish-worksheet.pdf" target="_blank" className="btn btn-primary">Worksheet</a>
            <a href="/pdfs/spanish-practicetest.pdf" target="_blank" className="btn btn-primary">Practice Test</a>
            <Link to="/quiz" className="btn btn-success">Attempt Quiz</Link>
          </div>
        </div>
      </div>
      <div className="language-box">
        <div className="language-section" style={{ backgroundImage: `url(${koreanFlag})` }}>
          <h3>Korean</h3>
          <div className="button-group">
            <a href="/pdfs/korean-worksheet.pdf" target="_blank" className="btn btn-primary">Worksheet</a>
            <a href="/pdfs/korean-practicetest.pdf" target="_blank" className="btn btn-primary">Practice Test</a>
          </div>
        </div>
      </div>
      <div className="language-box">
        <div className="language-section" style={{ backgroundImage: `url(${frenchFlag})` }}>
          <h3>French</h3>
          <div className="button-group">
            <a href="/pdfs/french-worksheet.pdf" target="_blank" className="btn btn-primary">Worksheet</a>
            <a href="/pdfs/french-practicetest.pdf" target="_blank" className="btn btn-primary">Practice Test</a>
          </div>
        </div>
      </div>
      <div className="language-box">
        <div className="language-section" style={{ backgroundImage: `url(${japaneseFlag})` }}>
          <h3>Japanese</h3>
          <div className="button-group">
            <a href="/pdfs/japanese-worksheet.pdf" target="_blank" className="btn btn-primary">Worksheet</a>
            <a href="/pdfs/japanese-practicetest.pdf" target="_blank" className="btn btn-primary">Practice Test</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
