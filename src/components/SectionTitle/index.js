import './componentTitle.scss';
import React from 'react';

const SectionTitle = (props) => {
  const { name, text } = props;
  return (
    <div className="section-title-wrapper">
      <h2
        className="section-title__name"
      >
        {name}
      </h2>
      <p
        className="section-title__text"
      >
        {text}
      </p>
    </div>
  );
};

export default SectionTitle;
