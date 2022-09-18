import React from 'react';
import './resumeButton.scss'

const resumeButton = () => (
  <div>
    <a href="/IvansResume.pdf" download>
      <button class="special-button">
        <span class="icon1">
          <i className="pi pi-file-pdf"></i>
        </span>
        <p class="label">Resume</p>
        <span class="icon2">
          <i className="pi pi-file-pdf"></i>
        </span>
      </button>
    </a>
    
  </div>
)


export default resumeButton
