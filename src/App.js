import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';



function App() {
  const [categories] = useState([
    { name: 'Portfolio', description: 'A showcase of my projects and weekly challenges.' },
    { contact: 'Contact', description: 'Ways to contact me.' },
    { resume: 'Resume', description: 'My Resume.' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //set to categories[0] for initial state
  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
