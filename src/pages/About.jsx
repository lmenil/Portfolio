// About.jsx
import React from 'react';
import '../styles/About.css';
// import profile from '../assets/profile.jpg'; // Ensure you have a profile.jpg in assets

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      {/* <img src={profile} alt="Your Name" className="profile-pic" /> */}
      <p>
        Hello! I'm [Your Name], a [Your Profession] with a passion for creating
        innovative solutions and enhancing user experiences. With expertise in
        [Your Skills], I strive to deliver high-quality projects that make a
        difference.
      </p>
      <a href="/resume.pdf" download className="resume-link">Download Resume</a>
    </div>
  );
};

export default About;
