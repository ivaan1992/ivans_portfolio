import React from 'react';
import { CCard } from '@coreui/react';
import { CButton } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardText } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import { CCardTitle } from '@coreui/react';
import './ProjectCard.scss';
// import { Button } from 'primereact/button';

const ProjectCard = () => 

 (
  <div className='cards-container d-flex'>
    <CCard className='card-project'>
      <CCardImage src="./assets/gps-app.png" />
      <CCardBody>
        <CCardTitle className='card-title'>GPS</CCardTitle>
        <CCardText className='card-info'>
          This is a gps app that I've create with Angular.
        </CCardText>
        <div className="links">
          <CButton href="https://angular-gps.netlify.app/">Project Link</CButton>
          <CButton href="https://github.com/ivaan1992/gps-app">Project Github</CButton>
        </div>
      </CCardBody>
    </CCard>
    <CCard className='card-project'>
      <CCardImage src="./assets/rick-and-morty.png" />
      <CCardBody>
        <CCardTitle className='card-title'>Rick & Morty App</CCardTitle>
        <CCardText className='card-info'>
          This is a character searcher that I created with React and Redux.
        </CCardText>
        <div className="links">
          <CButton href="https://6259967a85b0d915a5a221d6--musical-jelly-6f96dd.netlify.app/">Project Link</CButton>
          <CButton href="https://github.com/ivaan1992/react-app">Project Github</CButton>
        </div>
      </CCardBody>
    </CCard>
    <CCard className='card-project'>
      <CCardImage src="./assets/coffee-shop.png" />
      <CCardBody>
        <CCardTitle className='card-title'>Coffee Shop</CCardTitle>
        <CCardText className='card-info'>
          This is a coffee shop menu that I created with JavaScript.
        </CCardText>
        <div className="links">
          <CButton href="https://ivaan1992.github.io/Coffee-Shop/">Project Link</CButton>
          <CButton href="https://github.com/ivaan1992/Coffee-Shop">Project Github</CButton>
        </div>
      </CCardBody>
    </CCard>
  </div>
 )

export default ProjectCard
