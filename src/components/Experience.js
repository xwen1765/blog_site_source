import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faUniversity } from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";

const experience = [
  {
    company:  <Translate>Vanderbilt University</Translate>,
    position:  <Translate>PhD in Neuroscience</Translate>,
    date: "September 2022 - Now",
    desc: {
      1: "Rotation in Dr. Thilo Womelsdorf's lab",
      2: "Rotation in Dr. Catie Chang's lab",
      3: "Collaboration project with Dr. Catie Chang & Dr. Alexandra Maier"
    },
  },
  {
    company: "University of Rochester",
    position: "BSc in Computer Science, Honor BSc in Cognitive Science",
    date: "September 2017 - May 2020, 2022",
    desc: {
      1: "Worked under Dr. Martina Poletti",
      2: "Undergraduate thesis under Dr. Ralf Haefner",
    },
  },
  {
    company: "New York University, Shanghai",
    position: "Research Assistant",
    date: "July 2020 - July 2021",
    desc: {
      1: "Worked under Dr. Jeffery Erlich",
    },
  },
];
function Experience() {
  const [value, setValue] = useState(0);
  const { company, position, date, desc} = experience[value];

  return (
    <section className="experience">
      <h2 className="experience-title">
        <Translate>Education & Experience</Translate>
      </h2>
      <div className="underline"></div>
      
      <div className="experiences-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`experience-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="experience-date">{date}</p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="experience-icon"
                ></FontAwesomeIcon>
                <p><Translate>{desc[key]}</Translate></p>
              </div>
            );
          })}
        </article>
      </div>
      
    </section>
  );
}

export default Experience;
