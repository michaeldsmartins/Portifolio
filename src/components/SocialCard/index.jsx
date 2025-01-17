// src/components/SocialCard.js
import React from 'react';
import './index.scss';

const SocialCard = ({ githubUrl, linkedinUrl }) => {
  return (
    <div className="social-cards">
      <a className="social-card" href={githubUrl} target="_blank" rel="noopener noreferrer">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
        <h3>Acesse meu GitHub</h3>
      </a>
      <a className="social-card" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        <h3>Acesse meu LinkedIn</h3>
      </a>
    </div>
  );
};

export default SocialCard;