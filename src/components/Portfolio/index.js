// import React from 'react';
// import PortfolioList from '../PortfolioList';

// function Portfolio({currentCategory}) {
//     const {name, description} = currentCategory;
//     return (
//     <section>
//         <h1>{currentCategory.name}</h1>
//         <p>{currentCategory.name}</p>
//         <div><img src={photo} /></div>
//     </section>
//     );
// }
// export default Portfolio;

import React from "react";
import photo from "../../assets/images/projects/flavor-express.png";

function Portfolio(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Portfolio;