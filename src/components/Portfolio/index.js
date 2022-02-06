import React from 'react';
import PortfolioList from '../PortfolioList';

function Portfolio({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section id="portfolio">
      <h1>{name}</h1>
      <p>{description}</p>
      <PortfolioList  />
    </section>
  );
}

export default Portfolio;