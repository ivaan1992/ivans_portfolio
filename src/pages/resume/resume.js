import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import './resume.scss';

const resume = () => (
  <div className='d-flex'>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="resume d-flex">
        <h1>Hello again!!</h1>
        <p>In this section you can download my resume.
        </p>
    </div>
  </div>
);


export default resume
