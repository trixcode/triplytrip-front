import './topContent.scss';
import React from 'react';

const TopContent = () => (
  <div className="top-content container">
    <h1 className="top-content__title">
            Открой для себя
      <br />
      <span className="top-content__subtitle">интересные места в Кыргызстане.</span>
    </h1>
    <span className="top-content__text-one">Найди прекрасные места, где можно поесть от местных экспертов.</span>
    <span className="top-content__text-two">Посмотрите на самые желамаемые категории</span>
  </div>
);

export default TopContent;
