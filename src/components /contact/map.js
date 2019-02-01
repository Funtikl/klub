import React from 'react'
import image from './map.jpg';

export default function Mapimg() {
  return (
    <div style={{position:'absolute', marginTop:'900px', marginLeft:'40%'}}>
    <img src={image} />
    </div>
  )
}
