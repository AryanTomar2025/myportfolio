import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "JobHub",
    image: ImageOne,
    link: "https://jobhub27.netlify.app/",
  },
  {
    id: 3,
    name: "Hospital Management System",
    link: "https://hms-27.netlify.app/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Chat Application",
    image: ImageThree,
    link: "https://chat-bloom.onrender.com/login",
  },
  {
    id: 2,
    name: "SeeTube",
    image: ImageFour,
    link: "https://github.com/AryanTomar2025/SeeTube",
  },
  {
    id: 3,
    name: "MealDash",
    image: ImageFive,
    link: "https://github.com/AryanTomar2025/MealDash",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && item.link && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                )}
                {index === hoveredValue && !item.link && (
                  <div>
                    <p>{item.name}</p>
                    <button disabled>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
