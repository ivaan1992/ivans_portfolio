import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import './skills.scss'
import SkillCard from '../../components/skill-card/skillCard';

const skills = () => (
  <div className='d-flex'>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className='skills-section'>
      <h1>These are the skills that I have adquired as a full-stack developer</h1>
      <div class="cards">
        <SkillCard />
      </div>
    </div>
  </div>
);


export default skills
