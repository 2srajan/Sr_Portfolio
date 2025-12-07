import React, {useState,  useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constents';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward } from "react-icons/fa";
import './Header.scss';
import { client } from '../../client';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = (() => {
  const [resume, setResume] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const query = `*[_type == "resume"][0]{
      education,
      experience,
      skills,
      certifications,
      "resumeUrl": resumePdf.asset->url
    }`;

    client.fetch(query).then((data) => {
      setResume(data);
      setResumeUrl(data?.resumeUrl || '');
    });
  }, []);

  
  
  
  return (

    <>  
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Srajan Singh</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>

        {/* ✅ Resume Button with React Icon */}
          {resumeUrl && (
            <a href={resumeUrl} download className="resume-btn app__flex bdge-cmp">
              <FaDownload style={{ marginRight: "8px" }} />
              Download Resume
            </a>
          )}
        
      </div>
      {/* === Resume Sections from Sanity === */}
        <div className="resume-section app__flex app__header">
          {/* Education */}
          {resume?.education && (
            <div className="resume-block">
              <h3><FaGraduationCap /> Education</h3>
              {resume.education.map((edu, i) => (
                <div key={i} className="resume-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.institution} — {edu.year}</p>
                </div>
              ))}
            </div>
          )}

          {/* Experience */}
          {resume?.experience && (
            <div className="resume-block">
              <h3><FaBriefcase /> Experience</h3>
              {resume.experience.map((exp, i) => (
                <div key={i} className="resume-item">
                  <h4>{exp.role}</h4>
                  <p>{exp.company} — {exp.duration}</p>
                  <small>{exp.description}</small>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {resume?.skills && (
            <div className="resume-block">
              <h3>💻 Skills</h3>
              <ul>
                {resume.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {resume?.certifications && (
            <div className="resume-block">
              <h3><FaAward /> Certifications</h3>
              <ul>
                {resume.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>


    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.cpp, images.react, images.javascript].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>

  </>
);
});

export default AppWrap(Header, 'home');