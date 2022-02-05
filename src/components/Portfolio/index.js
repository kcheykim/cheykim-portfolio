import React from 'react';
import PortfolioList from '../PortfolioList';

function Portfolio({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>
      <PortfolioList  />
    </section>
  );
}

export default Portfolio;



// import React, {useState} from 'react';
// import PortfolioList from '../PortfolioList';

// function Portfolio({currentCategory}) {
//     const {name, description} = currentCategory;
//     const [photos] = useState([
//         {
//           name: 'Grocery aisle',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Grocery booth',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Building exterior',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Restaurant table',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Cafe interior',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Cat green eyes',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Green parrot',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Yellow macaw',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Pug smile',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Pancakes',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Burrito',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Scallop pasta',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Burger',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Fruit bowl',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Green river',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Docks',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Panoramic village by sea',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Domestic landscape',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Park bench',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//       ]);
//       return (
//         <div>
//           <div className="flex-row">
//             {photos.map((image, i) => (
//               <img
//                 src={require(`../../assets/small/${category}/${i}.jpg`).default}
//                 alt={image.name}
//                 className="img-thumbnail mx-1"
//                 key={image.name}
//               />
//             ))}
//           </div>
//         </div>
//       );
// }
// 




// import React from "react";
// import photo from "../../assets/images/projects/flavor-express.png";

// function Portfolio(props) {
//   const currentCategory = {
//     name: "commercial",
//     description:
//       "Photos of grocery stores, food trucks, and other commercial projects",
//   };
//   return (
//     <section>
//       <h1>{currentCategory.name}</h1>
//       <p>{currentCategory.name}</p>
//       <div className="flex-row">
//           <img
//             src={photo}
//             alt="Commercial Example"
//             className="img-thumbnail mx-1"
//           />
//       </div>
//     </section>
//   );
// }
// export default Portfolio;