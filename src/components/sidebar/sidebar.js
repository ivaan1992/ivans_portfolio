import React from 'react'
import sidebarData from './sidebarData';
import './sidebar.scss';

const sidebar = () => (
  <div className="sidebar d-flex">
      <ul className='d-flex'>
          {sidebarData.map((val, key) => {
            return (
              <li key={key} onClick={() => {window.location.pathname = val.link}}>
                  {" "}
                  <div className='d-flex sidebar-section'>{val.icon}
                    <div className='sidebar-title'>
                      {val.title}
                    </div>
                  </div>
              </li>
            )
          })}
      </ul>
  </div>  
)


export default sidebar;
