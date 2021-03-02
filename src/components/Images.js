import React from 'react'

// Import de la feuilles de styles
import './Images.css'

// Import des images
import loup from './Images/loup.jpg'
import ours from './Images/bear.jpg'
import singe from './Images/monkey.jpg'
import tigre from './Images/tigre.jpg'

// animaux: ['loup', 'ours', 'singe', 'tigre'],

const Image = (props) => {
  const imgSrc = {
    loup: loup,
    ours: ours,
    singe: singe,
    tigre: tigre,
  }
  return <img className="img-fluid" src={imgSrc[`${props.imgName}`]} alt="" />
}

export default Image
