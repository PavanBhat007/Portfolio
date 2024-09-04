/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.png";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Canteen Billing System",
    description:
      "A billing system successfully deployed in our college canteen, created using Flask and SQLite, with Javascript for some backend logic",
    url: "https://github.com/PavanBhat007/BillingSystem",
  },
  {
    title: "Hospital Management System",
    description:
      "Created a ReactJS based Hospital Management System with a team of 4 members, using SQL for backend, in a 2-day 12hr hackathon.",
    url: "https://github.com/PavanBhat007/Hospital-System",
  },
  {
    title: "My Portfolio Site",
    description:
      "Cretated a basic protfolio site with my information, using just Vanilla HTML, CSS and JS; hosted on Netlify",
    url: "https://brilliant-trifle-88d9ec.netlify.app/",
  },
  {
    title: "Decentralized Image Sharing DApp",
    description:
      "A decentralized software that allows users to conect to their metamask acocunts and share images.",
    url: "https://github.com/PavanBhat007/3Drive",
  },
];

const Portfolio = () => {
  return (
    <section
      className="padding"
      id="portfolio"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}></div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
