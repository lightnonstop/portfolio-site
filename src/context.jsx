import React, { useContext} from "react";
const AppContext = React.createContext();
const portfolioProjects = [
  {
    id: 1,
    image: require('./assets/meals.jpg'),
    caption: 'Meals Application',
    description: "Responsive HTML/CSS layout for meal app, data from 'themeal' API",
    live: 'https://umichaelmealwebapp.netlify.app',
    github: 'https://github.com/lightnonstop/Meals-App'
  },
  {
    id: 2,
    image: require("./assets/sneakers.jpg"),
    caption: 'E-commerce Sneaker',
    description: "Responsive HTML/SASS, React.js based sneaker page",
    live: 'https://umichaelsneakerweb.netlify.app',
    github: 'https://github.com/lightnonstop/Sneaker-ecommerce-Product-Page'
  },
  {
    id: 3,
    image: require("./assets/stocks.png"),
    caption: 'Stock Trading App',
    description: "React based stock search, stock graph implementation and stock information app, data from a stock API end point",
    live: 'https://umichaelstocktrdapp.netlify.app',
    github: 'https://github.com/lightnonstop/Stock-Trading-App'
  },
  {
    id: 4,
    image: require("./assets/library.jpg"),
    caption: 'Simple Library App',
    description: "JavaScript Object and protoype dependent Library app",
    live: 'https://umichaellibrary.netlify.app',
    github: 'https://github.com/lightnonstop/Library-App'
  },
  {
    id: 5,
    image: require("./assets/calculator.jpg"),
    caption: 'Calculator App',
    description: "HTML/CSS Simple calculator App",
    live: 'https://umichaelcalcapp.netlify.app',
    github: 'https://github.com/lightnonstop/Sneaker-ecommerce-Product-Page'
  },
  {
    id: 6,
    image: require("./assets/order-summary.jpg"),
    caption: 'Order Summary',
    description: "HTML/CSS layout product order summary",
    live: 'https://umichaelordersummary.netlify.app',
    github: 'https://github.com/lightnonstop/order-summary'
  },
  {
    id: 7,
    image: require("./assets/testimonials.jpg"),
    caption: 'Testimonial Component',
    description: "Fully responsive component built with HTML/CSS(Grid) layout",
    live: 'https://umichaeltestimonialcomp.netlify.app',
    github: 'https://github.com/lightnonstop/Testimonial-Component'
  },
  {
    id: 8,
    image: require("./assets/launch.jpg"),
    caption: 'Launch Countdown Timer',
    description: "Fully responsive HTML/CSS application",
    live: 'https://umichaellchncnttimerapp.netlify.app',
    github: 'https://github.com/lightnonstop/Launch-Count-Down-Timer-App'
  },
  {
    id: 9,
    image: require("./assets/cars.jpg"),
    caption: 'Vehicle Demo Landing',
    description: "Fully responsive HTML/CSS application",
    live: 'https://umichaelvehiclelandingpage.netlify.app',
    github: 'https://github.com/lightnonstop/Vehicle-Landing-Page'
  },
]
const Technologies = [
  {
    id: 1,
    tech: 'HTML',
    level: 'Advanced'
  },
  {
    id: 2,
    tech: 'CSS, SASS, Bootstrap, TailwindCSS',
    level: 'Advanced'
  },
  {
    id: 3,
    tech: 'Responsive Design',
    level: 'Advanced'
  },
  {
    id: 4,
    tech: 'JavaScript & Jquery',
    level: 'Advanced'
  },
  {
    id: 5,
    tech: 'React.js',
    level: 'Advanced'
  },
  {
    id: 6,
    tech: 'Node.js & Express.js',
    level: 'Regular'
  },
  {
    id: 7,
    tech: 'MongoDB, SQL & NoSQL',
    level: 'Beginner'
  }
]

const Addition = ['C', 'Git & Github', 'Python', 'Fast Learning', 'Team Work', 'Communication', 'A2 English', 'Engagement'];
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{portfolioProjects, Technologies, Addition}}>{children}</AppContext.Provider>;
};


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
