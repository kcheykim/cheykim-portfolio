import React from 'react';

function Nav() {

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="world">🌍</span>Kosal Cheykim
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;