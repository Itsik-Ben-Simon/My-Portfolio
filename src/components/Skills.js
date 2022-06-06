import React from "react";
import "./Skills.css";
import image1 from "../skills/css logo.png";
import image2 from "../skills/js logo.png";
import image3 from "../skills/html logo.png";
import image4 from "../skills/react logo.png";
import image5 from "../skills/windows logo.png";
import image6 from "../skills/linux logo.png";
import image7 from "../skills/metasploit logo.png";
import image8 from "../skills/python logo.png";
import image9 from "../skills/help desk logo.png";

function Skills() {
  const images = [
    {
      title: "css",
      src: image1
    },
    {
      title: "javascript",
      src: image2
    },
    {
      title: "html",
      src: image3
    },
    {
      title: "react",
      src: image4
    },
    {
      title: "windows",
      src: image5
    },
    {
      title: "linux",
      src: image6
    },
    {
      title: "metasploit",
      src: image7
    },
    {
      title: "python",
      src: image8
    },
    {
      title: "helpdesk",
      src: image9
    }
  ];

  return (
    <section>
      <h1 className="Skills_header">Part Of My Skills</h1>
      <div className="container">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.title} />
        ))}
      </div>
    </section>
  );
}

export default Skills;