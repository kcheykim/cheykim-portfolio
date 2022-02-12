import React, { useEffect } from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
    // contactSelected,
    // setContactSelected,
  } = props;

  // function categorySelected() {
  //   console.log('hello')
  // }

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <header className='flex-row px-1'>
      <h1>
        <a href='/'>
          <span role='img' aria-label='world'>🌍</span>Kosal Cheykim
        </a>
      </h1>
      <nav>
        <ul className='flex-row'>
          {categories.map((category) => (
             <li
             className={`mx-2 ${
               currentCategory.name === category.name && 'navActive'
               }`}
             key={category.name}
           >
              <span onClick={() => { setCurrentCategory(category)}}>
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