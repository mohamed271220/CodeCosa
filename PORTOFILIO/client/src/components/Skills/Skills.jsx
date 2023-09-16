import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, clients } from "../../client";
import "./index.css";
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type=="skills"]';

    clients.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="app__skills">
      <div data-section className="custom-section white" id="skills">
        <h1>Skills &amp; Technologies</h1>
        <p className="custom-section-desc">
          Stop wasting time and money designing and managing a website that
          doesn’t get results. Happiness guaranteed!
        </p>
        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {skills?.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
