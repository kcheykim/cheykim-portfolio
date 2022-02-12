import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [categories] = useState([
    // { name: 'Home', description: 'A showcase of my projects and weekly challenges.' },
    { name: 'About', description: 'A showcase of my projects and weekly challenges.' },
    { name: 'Portfolio', description: 'A showcase of my projects and weekly challenges.' },
    { name: 'Contact', description: 'Ways to contact me.' },
    { name: 'Resume', description: 'My Resume.' }
  ]);

  const renderPage = () => {
    if(currentCategory.name === "Portfolio") {
      return <Portfolio currentCategory={currentCategory}/>;
    }
    if(currentCategory.name === "About") {
      return <About currentCategory={currentCategory}/>;
    }
    if(currentCategory.name === "Contact") {
      return <Contact currentCategory={currentCategory}/>;
    }
    if(currentCategory.name === "Resume") {
      return <Portfolio currentCategory={currentCategory}/>;
    }
  }

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //set to categories[0] for initial state
  return (
    <div>
      <Nav categories={categories} 
      setCurrentCategory={setCurrentCategory} 
      currentCategory={currentCategory}></Nav>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
