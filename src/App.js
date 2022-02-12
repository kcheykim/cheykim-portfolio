import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    // { name: "Home", description: "A showcase of my projects and weekly challenges." },
    { name: "About", description: "A showcase of my projects and weekly challenges." },
    { name: "Portfolio", description: "A showcase of my projects and weekly challenges." },
    { name: "Contact", description: "You can submit the form, email me or go to my GitHub." },
    { name: "Resume", description: "Here is my resume." }
  ]);

  const renderPage = () => {
    if (currentCategory.name === "Portfolio") {
      return <Portfolio currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "About") {
      return <About currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "Contact") {
      return <Contact currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "Resume") {
      return <Resume currentCategory={currentCategory} />;
    }
  }

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //set to categories[0] for initial state
  return (
    <div>
      <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
