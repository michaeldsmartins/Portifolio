// src/components/ProjectCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ProjectCard = ({ title, description, url, technologies, imageSrc, imageAlt }) => {
  return (
    <div className="project-card">
      <img className="favicon" src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech">{tech}</span>
        ))}
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">Visitar Projeto</a>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default ProjectCard;