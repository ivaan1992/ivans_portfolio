import React from 'react';
import ProjectCard from '../../components/project-card/ProjectCard';
import Sidebar from '../../components/sidebar/sidebar';
import './portfolio.scss'

const portfolio = () => ( 
  <div className='d-flex'>
    <div>
      <Sidebar />
    </div>
    <div className='projects'>
      <h1>These are some projects that I've create</h1>
      <div class="cards">
        <ProjectCard />
      </div>
    </div>
    
  </div>
);


export default portfolio
