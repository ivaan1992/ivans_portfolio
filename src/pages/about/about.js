import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';

const about = () => (
  <div className='d-flex'>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className='about-me d-flex'>
       <h1 className="section-title">About me</h1>
       <p className="about-par">Software Developer. I found my passion when I started coding, so I decided to become a Full-Stack Developer.
         I used to be student at Microverse. I Have created several projects in different languages
         so now I know how coding works. JavaScript lover.
       </p>
       <br/>
       <p className="about-par">
         I'm friendly, organized, and can adapt myself to any situation.
         I love search solutions for problems and when I start a new project I always 
         do my best so I can finish it on time and try to learn all I can for any situation. 
       </p>
       <br />
       <p className="about-par">
         I have some hobbies. For example I love play sudoku, puzzles, watch tv shows, and movies. 
         I love raffaello ice cream, meet new people and new places.  
       </p>
       <br />
       <p className="about-par">I’m looking for collaborate on different kind of projects, because this is the way I learn coding and meet new people.
         I'm new in this industry, but I really like learn new things and at the same time 
         enjoy the whole process of making new projects. If you're interested, you can collaborate with me. 
       </p>
    </div>
  </div>
);

export default about
